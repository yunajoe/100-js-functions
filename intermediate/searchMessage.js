const calculateWordLength = (arr) => {
  return arr.reduce((acc, item) => {
    acc += item.length;
    return acc;
  }, 0);
};

const FILTER_REGEX = /[.,!]/g;
function searchMessages(messages, searchTerm) {
  const searchSet = new Set(searchTerm.toLowerCase().split(" "));

  return messages
    .map((message) => {
      const words = message.body
        .toLowerCase()
        .replaceAll(FILTER_REGEX, "")
        .split(" ");
      const matchedWords = words.filter((word) => searchSet.has(word));
      return {
        ...message,
        matchCount: calculateWordLength(matchedWords),
      };
    })
    .filter((msg) => msg.matchCount > 0)
    .sort((a, b) => {
      const diff = b.matchCount - a.matchCount;
      if (diff !== 0) return b.matchCount - a.matchCount;
      return new Date(b.sentAt) - new Date(a.sentAt);
    })
    .map(({ body, sentAt }) => {
      return {
        body,
        sentAt,
      };
    });
}

export { searchMessages };

function getLongestString(arrayOfStrings) {
  if (arrayOfStrings.length === 0) return "";
  const maxLength = Math.max(...arrayOfStrings.map((str) => str.length));
  const answer = arrayOfStrings.find((str) => str.length === maxLength);
  return answer;
}

export { getLongestString };

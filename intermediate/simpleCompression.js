function simpleCompression(text) {
  if (!text) return "";
  let answer = "";
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      answer += text[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
}

export { simpleCompression };

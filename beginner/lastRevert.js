function lastNRevert(text, n) {
  if (n - 1 >= text.length - 1) return text.split("").reverse().join("");
  let str = "";
  for (let i = text.length - 1; i >= text.length - 1 - n + 1; i--) {
    str += text[i];
  }
  return str;
}

export { lastNRevert };

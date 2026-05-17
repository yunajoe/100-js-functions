function rgbToHex(rgbColor) {
  const matches = rgbColor.match(/\d+/g);
  if (!matches || matches.length < 3) {
    return "";
  }
  const hex = matches
    .map((str) => {
      const num = parseInt(str, 10);
      return num.toString(16).padStart(2, "0");
    })
    .join("");

  return `#${hex}`;
}

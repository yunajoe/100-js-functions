function halfAndHalf(text) {
  if (!text) return "";
  const mid = Math.floor(text.length / 2);
  const first = text.slice(0, mid).toLowerCase();
  const latter = text.slice(mid).toUpperCase();
  return `${first}${latter}`;
}

export { halfAndHalf };

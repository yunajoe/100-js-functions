function rotateArray(items, n) {
  const len = items.length;
  if (len === 0) return [];
  const offset = ((n % len) + len) % len;

  return [...items.slice(len - offset), ...items.slice(0, len - offset)];
}

export { rotateArray };

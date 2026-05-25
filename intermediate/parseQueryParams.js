function parseQueryParams(url) {
  const map = new Map();
  const newURL = new URL(url);
  const params = new URLSearchParams(newURL.search);
  for (const param of params) {
    const [key, value] = param;
    map.set(key, value);
  }
  return map;
}

export { parseQueryParams };

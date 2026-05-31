function pickNested(data, path) {
  return path.split(".").reduce((acc, key) => {
    if (typeof acc !== "object" || !acc) return undefined;
    return acc[key];
  }, data);
}

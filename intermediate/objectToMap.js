function objectToMap(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(objectToMap);
  }

  // 객체인 경우
  const map = new Map();
  for (const [key, val] of Object.entries(value)) {
    map.set(key, objectToMap(val));
  }
  return map;
}
export { objectToMap };

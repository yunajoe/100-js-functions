function deepCopy(object) {
  if (!object || typeof object !== "object") return object;

  if (Array.isArray(object)) {
    return object.map((item) => deepCopy(item));
  }

  if (object instanceof Map) {
    const map = new Map();
    object.forEach((value, key) => {
      map.set(deepCopy(key), deepCopy(value));
    });
    return map;
  }
  if (object instanceof Set) {
    const set = new Set();
    object.forEach((value) => {
      set.add(deepCopy(value));
    });
    return set;
  }

  const obj = {};
  for (const key in object) {
    const result = deepCopy(object[key]);
    obj[key] = result;
  }
  return obj;
}

export { deepCopy };

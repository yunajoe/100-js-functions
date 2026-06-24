function isDeepEqual(object1, object2) {
  // 타입이 다르면 false
  if (typeof object1 !== typeof object2) return false;

  // 원시값일때
  if (typeof object1 !== "object" && typeof object2 !== "object") {
    if (object1 !== object2) return false;
    return true;
  }

  // array일떄
  if (Array.isArray(object1) && Array.isArray(object2)) {
    if (object1.length !== object2.length) return false;
    object1.sort((a, b) => a - b);
    object2.sort((a, b) => a - b);
    for (let i = 0; i < object1.length; i++) {
      const result = isDeepEqual(object1[i], object2[i]);
      if (!result) return false;
    }
    return true;
  }

  // date일때
  if (object1 instanceof Date && object2 instanceof Date) {
    if (object1.getTime() !== object2.getTime()) {
      return false;
    }
    return true;
  }

  // map일떄
  if (object1 instanceof Map && object2 instanceof Map) {
    if (object1.size !== object2.size) return false;
    for (const [key, value] of object1) {
      if (!object2.has(key)) return false;
      const result = isDeepEqual(value, object2.get(key));
      if (!result) return false;
    }

    return true;
  }

  // object 일떄 (순수)
  for (const [key, value] of Object.entries(object1)) {
    if (!Object.prototype.hasOwnProperty.call(object2, key)) return false;
    const result = isDeepEqual(value, object2[key]);
    if (!result) return false;
  }
  return true;
}

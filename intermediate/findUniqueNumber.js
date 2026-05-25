function findUniqueNumber(numbers) {
  const map = new Map();
  for (const num of numbers) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const [key, value] of map) {
    if (value === 1) return key;
  }
}

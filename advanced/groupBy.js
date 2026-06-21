function groupBy(callback) {
  const map = new Map();
  return this.reduce((acc, value) => {
    const key = callback(value);
    const values = map.get(key) || [];
    values.push(key);
    map.set(key, values);
    return acc;
  }, map);
}

Array.prototype.groupBy = groupBy;

const numbers = [1, 2, 3, 4, 5];

const groupingMap = numbers.groupBy((number) =>
  number % 2 === 0 ? "even" : "odd",
);

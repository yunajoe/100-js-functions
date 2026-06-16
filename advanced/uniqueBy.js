function uniqBy(callback) {
  const map = new Map();
  this.forEach((number, index) => {
    const value = callback(number);
    if (!map.has(value)) {
      map.set(value, index);
    }
  });

  const result = [...map.values(map)].map((value) => {
    return this[value];
  });
  return result;
}

Array.prototype.uniqBy = uniqBy;

const numbers = [
  10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35,
];

/**
 * 어떤 객체의 메서드로 함수를 호출하면, 그 함수 내부의 this는 메서드를 호출한 '마침표(.) 앞의 객체'를 가리킨다.
 * 따라서 this는 numbers를 가리킨다.
 */
const uniqNumbersPerInterval = numbers.uniqBy((number) =>
  Math.floor(number / 10),
);

console.log(uniqNumbersPerInterval); // [10, 20, 30]

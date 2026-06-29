function withCount() {
  let count = 0;
  const func = this;
  return function innerFunc(...args) {
    innerFunc.count = ++count;
    return func(...args);
  };
}

Function.prototype.withCount = withCount;

const sum = (a, b) => a + b;

const sumWithCount = sum.withCount();
sumWithCount(4, 5);
sumWithCount(4, 5);

console.log(sumWithCount.count); // 2

sumWithCount(10, 5);

console.log(sumWithCount.count); // 3

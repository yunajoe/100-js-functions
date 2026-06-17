function flow(...functions) {
  return function run(...params) {
    return functions.reduce((acc, func, idx) => {
      if (idx === 0) {
        return func(...params);
      }
      return func(acc);
    }, 0);
  };
}

const add = (a, b) => a + b;
const square = (a) => a ** 2;

const run = flow(add, square, square);

console.log(run(1, 2)); // 81

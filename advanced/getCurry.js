function getCurry(callback) {
  const argumentsArray = [];
  return function innerFunc(...args) {
    if (args.length > 0) {
      argumentsArray.push(...args);
    }
    if (!args || args.length === 0) return callback(...argumentsArray);
    return innerFunc;
  };
}

// const sum = (...params) => {
//   let total = 0;
//   for (const arg of params) {
//     total += arg;
//   }
//   return total;
// };

// console.log(currySum(0)); // 0
// console.log(currySum(1)()); // 1
// console.log(currySum(1)(2)()); // 3

// const diff = (...params) => {
//   let result = params[0] ?? 0;
//   for (let i = 1; i < params.length; i++) {
//     result -= params[i];
//   }
//   return result;
// };

// const curryDiff = getCurry(diff);
// console.log(curryDiff()); // 0
// console.log(curryDiff(1)(10)()); // -9
// console.log(curryDiff(100)(10)(20)(30)()); // 40

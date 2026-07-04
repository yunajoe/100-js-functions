/**
 * 커링이란 여러 개의 인자를 받는 함수를, 인자를 하나씩만 받는 함수들의 체인(사슬) 형태로 만드는 기술
 */

function currySum(args) {
  let sum = 0;
  sum += args;

  return function innerFunc(args) {
    if (!args) return sum;
    sum += args;
    return innerFunc;
  };
}

// console.log(currySum()); // 0
// console.log(currySum(1)()); // 1
// console.log(currySum(1)(2)(3)()); // 6
// console.log(currySum(11)(10)(9)(-5)()); // 25

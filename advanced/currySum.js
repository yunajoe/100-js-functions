/**
 * 커링이란 여러 개의 인자를 받는 함수를, 인자를 하나씩만 받는 함수들의 체인(사슬) 형태로 만드는 기술
 */

function currySum(...args) {
  console.log("args", args);
  if (args.length === 0) return 0;
  const value = args.shift();
  console.log("value", value);
  console.log("restArg ===>", args);
  return function (...args) {
    console.log("리턴하는 펑션이예용 ===>", value, args);
    const sum = value + currySum(...args);
    console.log("sum", sum);
    return currySum(...args);
  };
}

// const result1 = currySum(1);
// console.log("result1 ===>", result1);
// const result2 = result1(2);
// console.log("result2 ===>", result2, typeof result2);

// console.log(currySum()); // 0
// console.log(currySum(1)()); // 1
// console.log(currySum(1)(2)()); // 3
// console.log(currySum(1)(2)(3)()); // 6
// console.log(currySum(11)(10)(9)(-5)()); // 25

/**
 * 코드가 실행될 때 내부적으로는 다음과 같은 일이 일어납니다.
 1. 피연산자 확인: 1은 숫자(Number)이고, function recursive() { ... }는 함수(Function) 객체입니다. 두 타입이 서로 다르므로 자바스크립트는 타입을 맞추려고 합니다.
 2. 함수의 문자열 변환: 자바스크립트에서 함수에 덧셈 연산을 시도하면, 내부적으로 함수의 toString() 메서드가 호출됩니다. 함수의 toString()은 함수의 소스코드 전체를 문자열로 반환합니다.
 *   1function recursive() {
       return 2;
  
 */
const result =
  1 +
  function recursive() {
    return 2;
  };

console.log("ggg", result);

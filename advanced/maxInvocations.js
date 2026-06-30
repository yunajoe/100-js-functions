function maxInvocations(count) {
  const callbackFunc = this;
  return function innerFunc(...args) {
    if (count <= 0) {
      return;
    }
    count--;
    return callbackFunc(...args);
  };
}

Function.prototype.maxInvocations = maxInvocations;

const printSum = (a, b) => {
  console.log(a + b);
};

const limitedPrintSum = printSum.maxInvocations(2);
limitedPrintSum(1, 2); // 3
limitedPrintSum(10, 20); // 30
limitedPrintSum(100, 200);
limitedPrintSum(1000, 2000);

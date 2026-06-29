function reverseReduce(callbackFn, initialValue) {
  const result = [...this].reverse().reduce((acc, currentValue, index, arr) => {
    return callbackFn(acc, currentValue, arr.length - index - 1);
  }, initialValue);
  return result;
}

Array.prototype.reverseReduce = reverseReduce;

const names = ["Bob", "Jon", "Alex", "Sammy", "Diana"];

const concatNames = names.reverseReduce((acc, currentValue, currentIndex) => {
  return acc + `${currentValue} on Index ${currentIndex}`;
}, "");

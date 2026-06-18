function createCounter(initialValue) {
  return {
    increment: function () {
      initialValue = initialValue + 1;
    },
    decrement: function () {
      initialValue = initialValue - 1;
    },
    getValue: function () {
      return initialValue;
    },
  };
}

const counter = createCounter(11);

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getValue()); // should print 14

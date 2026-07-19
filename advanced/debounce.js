function debounce(callback) {
  let timerId = null;
  return function returnFunc(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
    }, 1000);
  };
}

const printSum = (a, b) => {
  console.log(a + b);
};

const debouncedCallback = debounce(printSum);

// debouncedCallback(1, 2);
// debouncedCallback(11, 12);
// debouncedCallback(100, 200);

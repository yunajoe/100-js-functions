function throttle(callback) {
  let isFirstTime = false;
  let startTime;
  return function throttleCallBack(...args) {
    if (!isFirstTime) {
      isFirstTime = true;
      startTime = performance.now();
      return callback(...args);
    }

    const timeLapse = performance.now() - startTime;
    if (timeLapse > 1000) {
      startTime = performance.now();
      return callback(...args);
    }
  };
}

const printSum = (a, b) => {
  console.log(a + b);
};

function throttleTwo(callback) {
  let isThrottled = false;
  return function throttleCallBack(...args) {
    if (isThrottled) return;
    callback(...args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 1000);
  };
}

const throttlePrintSum = throttleTwo(printSum);

throttlePrintSum(1, 2);
throttlePrintSum(11, 12);
throttlePrintSum(100, 200);

// const throttlePrintSum = throttle(printSum);

// throttlePrintSum(1, 2);
// throttlePrintSum(11, 12);
// throttlePrintSum(100, 200);

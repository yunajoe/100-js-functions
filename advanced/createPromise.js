function createPromise(number) {
  return new Promise((resolve, reject) => {
    if (number >= 0) {
      resolve("It's positive!");
    } else {
      resolve("It's negative!");
    }
  });
}

export { createPromise };

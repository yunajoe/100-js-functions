function checkSettlesInTime(promise, maxTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, maxTime);

    promise
      .then((data) => {})
      .catch((error) => {})
      .finally(() => {
        resolve(true);
      });
  });
}

// A promise that resolves after 250ms
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(), 200);
});

checkSettlesInTime(promise1, 500).then((didSettle) => {
  console.log(didSettle); // should print "true"
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => reject(), 2500);
});
checkSettlesInTime(promise2, 1000).then((didSettle) => {
  console.log(didSettle); // should print "false"
});

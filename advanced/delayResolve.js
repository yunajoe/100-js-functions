function quickPromise(promise, millis) {
  const timePromise = new Promise((resolve) => setTimeout(resolve, millis));
  return Promise.all([timePromise, promise])
    .then(([, data]) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

// 테스트용 함수들
const samplePromise = new Promise((resolve) => {
  setTimeout(() => resolve("성공"), 100);
});

const samplePromise2 = new Promise((resolve) => {
  setTimeout(() => resolve("성공"), 3000);
});

const samplePromise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("실패"), 2000);
});

const samplePromise4 = new Promise((resolve, reject) => {
  reject("실패");
});

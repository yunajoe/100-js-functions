function getDoubleN(n) {
  let cnt = 0;
  return function doubleN() {
    cnt++;
    return n * Math.pow(2, cnt);
  };
}

export { getDoubleN };

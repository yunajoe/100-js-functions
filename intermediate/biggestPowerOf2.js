function biggestPowerOf2(number) {
  if (number < 1) return -1;
  let cnt = 0;
  while (parseInt(number / 2) >= 1) {
    number = parseInt(number / 2);
    cnt++;
  }
  return cnt;
}

export { biggestPowerOf2 };

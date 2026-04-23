function averageOf4Numbers(nr1, nr2, nr3, nr4) {
  return [nr1, nr2, nr3, nr4].reduce((acc, cur) => acc + cur, 0) / 4;
}

export { averageOf4Numbers };

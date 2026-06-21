function sorted(compareFn) {
  const result = [...this];
  result.sort(compareFn);
  return result;
}

Array.prototype.sorted = sorted;

const numbers = [1, 2, 3, 4, 5];

const descendingNumbers = numbers.sorted((nr1, nr2) => nr2 - nr1);

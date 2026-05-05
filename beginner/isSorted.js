function isSorted(numbers) {
  const ascending = [...numbers].toSorted((a, b) => a - b);
  const descending = [...numbers].toSorted((a, b) => b - a);

  const result1 = ascending.every((number, index) => number === numbers[index]);
  const result2 = descending.every(
    (number, index) => number === numbers[index],
  );

  return result1 || result2;
}

export { isSorted };

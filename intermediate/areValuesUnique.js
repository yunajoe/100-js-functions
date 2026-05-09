function areValuesUnique(numbers) {
  const numSet = new Set(numbers);
  return numbers.length === numSet.size;
}

export { areValuesUnique };

function diffArrays(numbers1, numbers2) {
  const set1 = new Set(numbers1);
  const set2 = new Set(numbers2);
  const filtered1 = numbers1.filter((num) => !set2.has(num));
  const filtered2 = numbers2.filter((num) => !set1.has(num));

  return [...filtered1, ...filtered2];
}

export { diffArrays };

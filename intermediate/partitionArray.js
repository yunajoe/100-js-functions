function partitionArray(numbers, predicateCallback) {
  const pass = numbers.filter(predicateCallback);
  const fail = numbers.filter((num) => {
    if (!predicateCallback(num)) return true;
  });
  return {
    pass,
    fail,
  };
}

export { partitionArray };

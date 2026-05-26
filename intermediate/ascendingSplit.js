function ascendingSplit(numbers) {
  if (numbers.length === 0) return [];
  return numbers.reduce((acc, current, idx) => {
    if (idx === 0 || current < numbers[idx - 1]) {
      return [...acc, [current]];
    }
    const recentArr = acc[acc.length - 1];
    return [...acc.slice(0, -1), [...recentArr, current]];
  }, []);
}

export { ascendingSplit };

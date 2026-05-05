function extractElementsBetweenPositions(numbers, n, m) {
  if (n > m) {
    [n, m] = [m, n];
  }
  return numbers.slice(n, m + 1);
}

export { extractElementsBetweenPositions };

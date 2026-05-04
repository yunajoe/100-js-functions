function addDays(initialDate, daysCount) {
  const date = initialDate.getTime();
  const daysToMs = daysCount * 24 * 60 * 60 * 1000;
  return new Date(date + daysToMs);
}

export { addDays };

function isSameDay(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getYear() === d2.getYear() && d1.getMonth() === d2.getMonth();
}

export { isSameDay };

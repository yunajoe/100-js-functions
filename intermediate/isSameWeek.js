function getMonday(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + diffToMonday);
  return d;
}

function isSameWeek(date1, date2) {
  const monday1 = getMonday(date1);
  const monday2 = getMonday(date2);
  return monday1.getTime() === monday2.getTime();
}

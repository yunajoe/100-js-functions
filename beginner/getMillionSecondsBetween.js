const getDiff = (date1, date2) => Math.abs(new Date(date1) - new Date(date2));

function getMillisecondsBetween(date1, date2) {
  const diff = getDiff(date1, date2);
  return diff;
}

export { getMillisecondsBetween };

function countPageViews(pageViews, country, interval) {
  const startTime = new Date(interval.startDate).getTime();
  const endTime = new Date(interval.endDate).getTime();
  return pageViews.reduce((acc, curr) => {
    const currentTime = new Date(curr.date);
    if (
      curr.country === country &&
      startTime <= currentTime &&
      currentTime <= endTime
    ) {
      acc += curr.count;
    }
    return acc;
  }, 0);
}

export { countPageViews };

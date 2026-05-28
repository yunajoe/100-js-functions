function findFreeCalendarSpots(meetings) {
  const startWorkTime = 9 * 60;
  const endWorkTime = 17 * 60;
  const result = meetings
    .map((meeting) => {
      const {
        duration,
        startTime: { hours, minutes },
      } = meeting;
      const minuteStartTime = hours * 60 + minutes;
      const minutesEndTime = minuteStartTime + duration;
      return { minuteStartTime, minutesEndTime };
    })
    .toSorted((a, b) => a.minuteStartTime - b.minuteStartTime);

  if (result.length === 0)
    return [{ duration: 480, startTime: { hours: 9, minutes: 0 } }];

  const answer = [];
  for (let i = 1; i < result.length; i++) {
    const prevTime = result[i - 1];
    const currentTime = result[i];
    if (currentTime.minuteStartTime > prevTime.minutesEndTime) {
      answer.push({
        duration: currentTime.minuteStartTime - prevTime.minutesEndTime,
        startTime: {
          hours: parseInt(prevTime.minutesEndTime / 60),
          minutes: prevTime.minutesEndTime % 60,
        },
      });
    }
  }

  const firstValue = result[0];
  const lastValue = result[result.length - 1];

  if (firstValue.minuteStartTime > startWorkTime) {
    answer.push({
      duration: firstValue.minuteStartTime - startWorkTime,
      startTime: {
        hours: parseInt(startWorkTime / 60),
        minutes: startWorkTime % 60,
      },
    });
  }

  if (lastValue.minutesEndTime < endWorkTime) {
    answer.push({
      duration: endWorkTime - lastValue.minutesEndTime,
      startTime: {
        hours: parseInt(lastValue.minutesEndTime / 60),
        minutes: lastValue.minutesEndTime % 60,
      },
    });
  }

  return answer;
}
export { findFreeCalendarSpots };

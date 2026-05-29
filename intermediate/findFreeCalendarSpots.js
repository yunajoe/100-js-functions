function findFreeCalendarSpots(meetings) {
  const START_WORK_MINUTES = 9 * 60;
  const END_WORK_MINUTES = 17 * 60;
  const sortedMeetings = meetings
    .map(({ duration, startTime: { hours, minutes } }) => {
      const start = hours * 60 + minutes;
      return { start, end: start + duration };
    })
    .toSorted((a, b) => a.start - b.start);

  const mergedMeetings = [];
  for (const current of sortedMeetings) {
    if (mergedMeetings.length === 0) {
      mergedMeetings.push(current);
      continue;
    }

    let lastMerged = mergedMeetings[mergedMeetings.length - 1];
    if (current.start <= lastMerged.end) {
      lastMerged.end = Math.max(current.end, lastMerged.end);
    } else {
      mergedMeetings.push(current);
    }
  }
  const freeSpots = [];
  let currentTimeline = START_WORK_MINUTES;
  for (const meeting of mergedMeetings) {
    if (meeting.startTime > currentTimeline) {
      freeSpots.push(createSpotObject(currentTimeline, meeting.start));
    }
    currentTimeline = Math.max(currentTimeline, meeting.end);
  }
  if (currentTimeline < END_WORK_MINUTES) {
    freeSpots.push(createSpotObject(currentTimeline, END_WORK_MINUTES));
  }
}

function createSpotObject(startMinutes, endMinutes) {
  return {
    duration: endMinutes - startMinutes,
    startTime: {
      hours: Math.floor(startMinutes / 60),
      minutes: startMinutes % 60,
    },
  };
}

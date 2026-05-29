function mergeIntervals(intervals, newIntervals) {
  const sortedMerges = [...intervals, ...newIntervals].toSorted(
    (a, b) => a.from - b.from,
  );
  const answer = [];
  for (let i = 0; i < sortedMerges.length; i++) {
    if (i === 0) {
      answer.push(sortedMerges[i]);
      continue;
    }
    let lastObj = answer[answer.length - 1];
    if (
      lastObj.to >= sortedMerges[i].from &&
      lastObj.to <= sortedMerges[i].to
    ) {
      lastObj.to = sortedMerges[i].to;
      const mergeArr = [...lastObj.numbers, ...sortedMerges[i].numbers].sort(
        (a, b) => a - b,
      );
      lastObj.numbers = mergeArr;
    } else {
      answer.push(sortedMerges[i]);
    }
  }
  return answer;
}

const sec = 1000;
const minute = sec * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = month * 12;

const UNIT = [
  { max: minute, value: null, text: "just now" },
  { max: hour, value: minute, text: "minute" },
  { max: day, value: hour, text: "hour" },
  { max: month, value: day, text: "day" },
  { max: year, value: month, text: "month" },
];
const getUnit = (miliseconds) => {
  for (const unit of UNIT) {
    if (miliseconds < unit.max) {
      if (unit.value === null) return unit.text;
      const num = parseInt(miliseconds / unit.value);
      return `${num} ${num > 1 ? `${unit.text}s` : unit.text} ago`;
    }
  }
  return "more than a year ago";
};

function timeAgo(date1, date2) {
  const milsec = new Date(date1).getTime();
  const milsec2 = new Date(date2).getTime();
  const diff = Math.abs(milsec - milsec2);
  const result = getUnit(diff);
  return result;
}

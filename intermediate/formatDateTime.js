const options = {
  dateStyle: "long",
  timeStyle: "short",
  // 24시간제를 사용
  hour12: false,
};

function formatDateTime(date, locale) {
  const dateObject = new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(dateObject);
}

export { formatDateTime };

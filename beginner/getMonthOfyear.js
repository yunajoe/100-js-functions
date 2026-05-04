const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getMonthOfTheYear(date) {
  const month = new Date(date).getMonth();
  return months[month];
}

export { getMonthOfTheYear };

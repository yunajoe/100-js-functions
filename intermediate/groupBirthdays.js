const DATE_GETTERS_FUNC = {
  year: (date) => date.getFullYear(),
  month: (date) => date.getMonth() + 1,
  day: (date) => date.getDate(),
};

function groupBirthdays(users, groupBy) {
  const map = Map.groupBy(users, ({ birthday }) => {
    const dateObject = new Date(birthday);
    const keyFunc = DATE_GETTERS_FUNC[groupBy];
    const key = keyFunc(dateObject);
    return key;
  });
  return map;
}

export { groupBirthdays };

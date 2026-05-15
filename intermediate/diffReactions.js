function diffReactions(yesterdayReactions, todayReactions) {
  const yesterdayKeys = Object.keys(yesterdayReactions);
  const todaysKeys = Object.keys(todayReactions);
  const totalKeys = [...new Set([...yesterdayKeys, ...todaysKeys])];
  if (yesterdayKeys.length === 0) {
    return todaysKeys.flatMap((key) => {
      return todayReactions[key].map((react) => {
        return `${key} react with ${react}`;
      });
    });
  }
  if (todaysKeys.length === 0) {
    return yesterdayKeys.flatMap((key) => {
      return yesterdayReactions[key].map((react) => {
        return `${key} removed their ${react}`;
      });
    });
  }
  const arr = [];
  for (const key of totalKeys) {
    const yesterdayValues = yesterdayReactions[key];
    const todayValues = todayReactions[key];
    if (!todayValues && yesterdayValues) {
      yesterdayValues.forEach((value) => {
        arr.push(`${key} removed their ${value}`);
      });
    }
    if (todayValues && !yesterdayValues) {
      todayValues.forEach((value) => {
        arr.push(`${key} reacted with ${value}`);
      });
    }

    if (todayValues && yesterdayValues) {
      todayValues.forEach((value) => {
        const result = yesterdayValues.includes(value);
        if (!result) {
          arr.push(`${key} reacted with ${value}`);
        }
      });
      yesterdayValues.forEach((value) => {
        const result = todayValues.includes(value);
        if (!result) {
          arr.push(`${key} removed their ${value}`);
        }
      });
    }
  }
  return arr;
}

export { diffReactions };

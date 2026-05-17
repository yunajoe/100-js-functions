function diffReactions(yesterdayReactions, todayReactions) {
  const allUsers = new Set([
    ...Object.keys(yesterdayReactions),
    ...Object.keys(todayReactions),
  ]);
  const changes = [];
  for (const user of allUsers) {
    const yesterdayArr = yesterdayReactions[user] || [];
    const todayArr = todayReactions[user] || [];

    const yesterdaySet = new Set(yesterdayArr);
    const todaySet = new Set(todayArr);

    // 오늘은 있으나 어제는 없는. 즉 추가된 상태
    for (const react of todayArr) {
      if (!yesterdaySet.has(react)) {
        changes.push(`${user} reacted with ${react}`);
      }
    }

    // 어제는 있으나 오늘은 없는. 즉, 제거된 상태
    for (const react of yesterdayArr) {
      if (!todaySet.has(react)) {
        changes.push(`${user} removed their ${react}`);
      }
    }
  }
  return changes;
}

export { diffReactions };

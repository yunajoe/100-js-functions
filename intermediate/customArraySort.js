function customArraySort(users, currentUserId) {
  const currentUser = users.find((user) => user.id === currentUserId);

  const group1 = []; // 35세 이상 ~ 50세 미만
  const group2 = []; // 18세 미만
  const group3 = []; // 50세 이상
  const group4 = []; // 18세 이상 ~ 35세 미만

  for (const user of users) {
    if (currentUser && currentUser.id === user.id) continue;
    if (user.age >= 35 && user.age < 50) {
      group1.push(user);
    } else if (user.age < 18) {
      group2.push(user);
    } else if (user.age >= 50) {
      group3.push(user);
    } else if (user.age >= 18 && user.age < 35) {
      group4.push(user);
    }
  }
  const sortByAgeDesc = (a, b) => b.age - a.age;
  group1.sort(sortByAgeDesc);
  group2.sort(sortByAgeDesc);
  group3.sort(sortByAgeDesc);
  group4.sort(sortByAgeDesc);

  return [
    ...(currentUser ? [currentUser] : []),
    ...group1,
    ...group2,
    ...group3,
    ...group4,
  ];
}

export { customArraySort };

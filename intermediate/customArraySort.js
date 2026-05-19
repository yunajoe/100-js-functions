function customArraySort(users, currentUserId) {
  // 1. currentUserId와 같은 user
  // 2.  35세 이상 ~ 50세 미만
  // 3.  18세 미만
  // 4.  50세 이상
  // 5.  18세 이상 ~ 35세 미만
  /**
   * 각 그룹 안(같은 인터벌)에 속한 사용자들끼리는 나이(age)가 많은 순서대로
   *
   */
  const currentUser = users.find((user) => user.id === currentUserId);
  const group1 = users;

  const result = users.toSorted((a, b) => {
    console.log("ab ===>", a, b);
  });
  console.log("결과 ===>", result);
}

export { customArraySort };

customArraySort(
  [
    { id: "user3", age: 50 },
    { id: "user8", age: 50 },
    { id: "user5", age: 49 },
    { id: "user2", age: 18 },
    { id: "user9", age: 17 },
    { id: "user10", age: 13 },
    { id: "user11", age: 14 },
    { id: "user13", age: 34 },
    { id: "user14", age: 30 },
    { id: "user12", age: 35 },
  ],
  "user2",
);

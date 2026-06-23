function isDeepEqual(object1, object2) {}

// const storeA = {
//   storeName: "강남점",
//   inventory: new Map([
//     ["apple", 10],
//     ["banana", 20],
//   ]),
// };

// const storeB = {
//   storeName: "강남점",
//   inventory: new Map([
//     ["apple", 10],
//     ["banana", 20],
//   ]),
// };

// const storeC = {
//   storeName: "강남점",
//   inventory: new Map([
//     ["apple", 10], // banana가 없음!
//   ]),
// };

// console.log(isDeepEqual(storeA, storeB)); // ⭕ true
// console.log(isDeepEqual(storeA, storeC)); // ❌ false

// const date1 = new Date("2026-01-01");
// const date2 = new Date("2026-01-01");

// console.log(isDeepEqual({ time: date1 }, { time: date2 })); // ⭕ true
const userA = {
  name: "Kim",
  hobby: ["coding", "gaming"], // 배열 포함
  address: { city: "Seoul" }, // 중첩 객체 포함
};

const userB = {
  name: "Kim",
  hobby: ["coding", "gaming"],
  address: { city: "Seoul" },
};

const userC = {
  name: "Kim",
  hobby: ["coding", "cooking"], // hobby 내용이 다름!
  address: { city: "Seoul" },
};

console.log(isDeepEqual(userA, userB)); // ⭕ true
console.log(isDeepEqual(userA, userC)); // ❌ false

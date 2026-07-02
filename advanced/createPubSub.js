function createPubSub() {
  const callbacks = {};
  return {
    subscribe: function (callbackName, callbackFunc) {
      if (!callbacks[callbackName]) {
        callbacks[callbackName] = [];
      }
      callbacks[callbackName].push(callbackFunc);
      return function () {
        const result = callbacks[callbackName].filter(
          (item) => item !== callbackFunc,
        );
        callbacks[callbackName] = result;
      };
    },
    publish: function (callbackName, ...args) {
      const result = callbacks[callbackName];
      if (!result) return;
      result.forEach((callback) => {
        callback(...args);
      });
    },
  };
}

// const broker = createPubSub();

// // 1. 스포츠 채널에 철수와 영희가 각각 구독을 신청합니다.
// broker.subscribe("sports", (data) => {
//   console.log(`[철수 알림] ⚽ ${data.player} 선수가 ${data.action}!`);
// });

// broker.subscribe("sports", (data) => {
//   console.log(`[영희 알림] 📢 와! ${data.player}가 일을 냈네요!`);
// });

// // 2. 이벤트 발행 (객체 데이터를 넘겨봅니다)
// console.log("--- 테스트 1 시작 ---");
// broker.publish("sports", { player: "손흥민", action: "원더골을 터트렸습니다" });

/*
출력 예상:
--- 테스트 1 시작 ---
[철수 알림] ⚽ 손흥민 선수가 원더골을 터트렸습니다!
[영희 알림] 📢 와! 손흥민가 일을 냈네요!
*/

// const broker2 = createPubSub();

// // 1. 요리 채널을 백종원, 김풍 두 사람이 구독합니다.
// const unsubscribe백종원 = broker2.subscribe("cooking", (recipe) => {
//   console.log(`[백종원 수신] 음~ ${recipe} 아주 맛있겠쥬?`);
// });

// const unsubscribe김풍 = broker2.subscribe("cooking", (recipe) => {
//   console.log(`[김풍 수신] 와! 대박! ${recipe}를 이렇게 만든다고요?`);
// });

// // 2. 첫 번째 발행 -> 두 명 다 받아야 함
// console.log("\n--- 테스트 2: 전체 발행 ---");
// broker2.publish("cooking", "초간단 계란볶음밥");

// // 3. 백종원만 구독 취소! (김풍은 여전히 남아있어야 함)
// unsubscribe백종원();

// // 4. 두 번째 발행 -> 김풍만 받아야 함
// console.log("\n--- 테스트 2: 백종원 취소 후 발행 ---");
// broker2.publish("cooking", "스팸 두부조림");

/*
출력 예상:
--- 테스트 2: 전체 발행 ---
[백종원 수신] 음~ 초간단 계란볶음밥 아주 맛있겠쥬?
[김풍 수신] 와! 대박! 초간단 계란볶음밥를 이렇게 만든다고요?

--- 테스트 2: 백종원 취소 후 발행 ---
[김풍 수신] 와! 대박! 스팸 두부조림를 이렇게 만든다고요?
*/

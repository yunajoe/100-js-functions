function customBind(newThis, params) {
  // addToThis 펑션이다
  const originalFn = this;
  return function bindedFn() {
    return originalFn.apply(newThis, params); // addToThis.apply(newThis, params) 호출
  };
}

Function.prototype.customBind = customBind;

function addToThis(nr1, nr2) {
  return this + nr1 + nr2;
}

const bindedFn = addToThis.customBind(5, [10, 15]);
console.log(bindedFn()); // 30

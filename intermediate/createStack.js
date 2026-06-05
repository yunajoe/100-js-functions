function createStack() {
  const items = [];

  const stack = {
    add(num) {
      items.unshift(num);
    },
    list() {
      return items;
    },
    remove() {
      return items.shift();
    },
  };
  return stack;
}

export { createStack };

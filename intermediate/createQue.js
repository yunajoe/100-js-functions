function createQueue() {
  let items = [];
  const queue = {
    add(num) {
      items = [...items, num];
    },
    list() {
      return [...items];
    },
    remove() {
      return items.shift();
    },
  };

  return queue;
}

export { createQueue };

function createQueue() {
  const items = [];
  const queue = {
    add(num) {
      items.push(num);
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

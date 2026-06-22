function createLinkedList(initialNumbers) {
  function buildList(numbers) {
    if (numbers.length === 0 || !numbers) return null;
    const copyNumbers = [...numbers];
    const value = copyNumbers.shift();
    let obj = new Object();
    obj.value = value;
    const nextValue = buildList(copyNumbers);
    obj.next = nextValue;
    return obj;
  }
  let head = buildList(initialNumbers);
  return {
    getStart: function () {
      return head;
    },
    push: function (newNode) {
      const node = { value: newNode, next: null };

      if (head === null) {
        head = node;
        return;
      }
      // head라는 주소록에 적힌 주소를 copyHead라는 새로운 주소록에 그대로 받아 적은 것
      // 결국 head와 copyHead는 이름만 다를 뿐, 메모리 상의 완전히 동일한 진짜 객체(집)를 가리키고 있다.
      let copyHead = head;
      while (copyHead.next !== null) {
        copyHead = copyHead.next;
      }
      copyHead.next = node;
    },

    unshift: function (newNode) {
      head = {
        value: newNode,
        next: head,
      };
    },
  };
}

const list = createLinkedList([10, 20]);
console.log(list.getStart());
list.push(30);
console.log(list.getStart());
list.unshift(100);
console.log(list.getStart());

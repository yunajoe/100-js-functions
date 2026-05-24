function mergeSortedArrays(numbers1, numbers2) {
  let leftIdx = 0;
  let rightIdx = numbers2.length - 1;
  const result = [];

  while (leftIdx <= numbers1.length - 1 && rightIdx >= 0) {
    if (numbers1[leftIdx] <= numbers2[rightIdx]) {
      result.push(numbers1[leftIdx]);
      leftIdx++;
    } else {
      result.push(numbers2[rightIdx]);
      rightIdx--;
    }
  }
  // numbers1이 남아있을경우
  while (leftIdx <= numbers1.length - 1) {
    result.push(numbers1[leftIdx]);
    leftIdx++;
  }
  // numbers2가 남아있을경우
  while (rightIdx >= 0) {
    result.push(numbers2[rightIdx]);
    rightIdx--;
  }
  return result;
}

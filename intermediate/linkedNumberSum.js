function linkedNumbersSum(node) {
  if (!node) return 0;
  return node.value + linkedNumbersSum(node.next);
}

export { linkedNumbersSum };

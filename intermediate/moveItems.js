function moveItems(numbers, moveInstructions) {
  const copyNumbers = [...numbers];
  for (const instruction of moveInstructions) {
    const { fromIndex, toIndex } = instruction;
    const insertIndex = toIndex === 0 ? 0 : toIndex + 1;
    copyNumbers.splice(insertIndex, 0, copyNumbers[fromIndex]);
    const deleteIndex = toIndex === 0 ? fromIndex + 1 : fromIndex;
    copyNumbers.splice(deleteIndex, 1);
  }
  return copyNumbers;
}

export { moveItems };

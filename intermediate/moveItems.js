function moveItems(numbers, moveInstructions) {
  const copyNumbers = [...numbers];
  for (const instruction of moveInstructions) {
    const { fromIndex, toIndex } = instruction;
    const deleteEle = copyNumbers.splice(fromIndex, 1);
    copyNumbers.splice(toIndex, 0, deleteEle[0]);
  }
  return copyNumbers;
}

export { moveItems };

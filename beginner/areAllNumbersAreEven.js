function areAllNumbersEven(numbers) {
  const result = numbers.every((num) => num % 2 === 0);
  return result;
}

export { areAllNumbersEven };

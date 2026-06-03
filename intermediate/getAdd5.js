function getAdd5() {
  const VALUE = 5;
  return function closerFunc(num) {
    return VALUE + num;
  };
}

export { getAdd5 };

function getAdd5() {
  const VALUE = 5;
  return function closureFunc(num) {
    return VALUE + num;
  };
}

export { getAdd5 };

/**
 * const getAdd5 = () => (num) =>  5 + num;
 */

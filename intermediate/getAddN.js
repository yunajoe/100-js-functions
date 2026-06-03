function getAddN(value) {
  return function closureFunc(num) {
    return value + num;
  };
}

export { getAddN };

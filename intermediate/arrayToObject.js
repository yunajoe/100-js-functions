function arrayToObject(strings) {
  return [...strings].reduce((acc, str, idx) => {
    if (!(str in acc)) {
      acc[str] = idx;
    }
    return acc;
  }, {});
}

export { arrayToObject };

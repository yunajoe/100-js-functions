function mostRepetitions(string1, string2, letter) {
  const map = new Map();
  const getCount = (str, letter) =>
    [...str].filter((value) => value === letter).length;
  map.set(string1, getCount(string1, letter));
  map.set(string2, getCount(string2, letter));
  return map.get(string1) >= map.get(string2) ? string1 : string2;
}

export { mostRepetitions };

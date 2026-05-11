function compareSets(setA, setB) {
  const set1 = [...setA].filter((value) => !setB.has(value));
  const set2 = [...setB].filter((value) => !setA.has(value));
  const set3 = [...setA, ...setB];
  return {
    onlyA: new Set(set1),
    onlyB: new Set(set2),
    union: new Set(set3),
  };
}

export { compareSets };

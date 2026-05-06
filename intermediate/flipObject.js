const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
  const map = new Map();
  for (const [key, value] of Object.entries(people)) {
    const result = map.get(value);
    if (!result) {
      map.set(value, []);
    }
    map.get(value).push(key);
  }

  return Object.fromEntries(map);
}

export { flipObject };

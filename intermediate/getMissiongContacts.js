function getMissingContacts(contactsMap) {
  const keys = [...contactsMap.keys()];
  return new Map(
    keys.map((key) => {
      const setValues = new Set([key, ...contactsMap.get(key)]);
      const filterArr = keys.filter((key) => !setValues.has(key));
      return [key, filterArr];
    }),
  );
}

export { getMissingContacts };

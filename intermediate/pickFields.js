function pickFields(data, fields) {
  return [...fields].reduce((acc, field) => {
    if (data[field]) {
      acc[field] = data[field];
    }
    return acc;
  }, {});
}

export { pickFields };

function getPaginatedData(users, sortBy, direction, perPage, pageNumber) {
  const sortedArr = [...users].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    const modifier = direction === "asc" ? 1 : -1;
    if (typeof valA === "number" && typeof valB === "number") {
      return (valA - valB) * modifier;
    }
    const comparison = String(valA).localeCompare(String(valB), "ko-KR", {
      numeric: true,
      sensitivity: "base",
    });
    return comparison * modifier;
  });

  const startIndex = (pageNumber - 1) * perPage;
  const result = sortedArr.slice(startIndex, perPage * pageNumber);
  return result;
}

export { getPaginatedData };

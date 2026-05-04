function getDevelopers(employees) {
  return employees.filter((employee) => employee.job === "developer");
}

export { getDevelopers };

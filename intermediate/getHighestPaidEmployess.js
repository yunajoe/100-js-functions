export function getHighestPaidEmployee(employees, departmentId) {
  const deptEmployees = employees.filter(
    (e) => e.departmentId === departmentId,
  );

  if (deptEmployees.length === 0) return undefined;

  const topEarner = deptEmployees.reduce((prev, curr) =>
    curr.salary > prev.salary ? curr : prev,
  );

  return topEarner.name;
}

export default function createIteratorObject(report) {
  const employeeNames = Object.values(report.allEmployees);
  const array = [].concat(...employeeNames);
  return array[Symbol.iterator]();
}

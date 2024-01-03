export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = ``;
  for (const x of reportWithIterator) {
    employeeNames += `${x} | `;
  }
  return employeeNames.slice(0, -3);
}

/* creating a named function that returns an object */

export default function createEmployeesObject(departmentName, employees) {
  const deptInfo = {
    [departmentName]: employees,
  };

  return deptInfo;
}

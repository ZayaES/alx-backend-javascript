export default function getStudentIdsSum(students) {
  function sum(total, obj) {
    return total + obj.id;
  }
  return students.reduce(sum, 0);
}

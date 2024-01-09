export default function getStudentsByLocation(Students, city) {
  function checkLocation(arr) {
    return arr.location === city
  }
  return Students.filter(checkLocation);
}

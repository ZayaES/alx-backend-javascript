export default function getStudentsByLocation(array, city) {
  function checkLocation(arr) {
    arr.location === city
  }
  return array.filter(checkLocation);
}

export default function getStudentsByLocation(array, city) {
  function checkLocation(arr) {
    return arr.location === city
  }
  return array.filter(checkLocation);
}

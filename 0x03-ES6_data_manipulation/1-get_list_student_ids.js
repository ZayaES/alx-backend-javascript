export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  function map_(x) {
    return x.id;
  }
  const newArray = array.map(map_);
  return newArray;
}

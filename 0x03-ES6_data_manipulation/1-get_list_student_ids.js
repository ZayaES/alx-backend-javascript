export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  function map_(x) {
    return x.id;
  }
  const new_array = array.map(map_);
  return new_array;
}

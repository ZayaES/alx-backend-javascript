export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const new_array = [];
  let i = 0;
  for(const x of array) {
    new_array[i] = x.id; 
    i += 1;
  }
  return new_array;
}

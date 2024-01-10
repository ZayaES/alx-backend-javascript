export default function cleanSet (set, startString) {
  if (!startString) {
    return '';
  }
  const array = [...set];
  let arr = array.filter((entry) => entry.startsWith(startString));
  arr = arr.map((entry) => {
    return entry.slice(startString.length);
  });
  return arr.join('-');
}

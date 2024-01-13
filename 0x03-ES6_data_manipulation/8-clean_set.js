export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length <= 0) {
    return '';
  }
  const array = [...set];
  let arr = array.filter((entry) => (entry !== undefined ? entry.startsWith(startString) : ''));
  arr = arr.map((entry) => (entry !== undefined ?entry.slice(startString.length) : ''));
  return arr.join('-');
}

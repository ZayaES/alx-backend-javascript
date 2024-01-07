/* use of for of */

export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const retArray = [];
  for (const val of array) {
    retArray[i] = appendString + val;
    i += 1;
  }

  return retArray;
}

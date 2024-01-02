/* use of for of */

export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const val of array) {
    array[i] = appendString + val;
    i++;
  }

  return array;
}

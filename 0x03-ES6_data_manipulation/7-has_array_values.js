export default function hasValuesFromArray(set, array) {
  for (const ent of array) {
    if (!set.has(ent)) {
      return false;
    }
  }
  return true;
}

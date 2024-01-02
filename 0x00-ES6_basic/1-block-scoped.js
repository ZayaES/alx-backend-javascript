export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }
  /* eslint-enable no-unused-vars */

  return [task, task2];
}

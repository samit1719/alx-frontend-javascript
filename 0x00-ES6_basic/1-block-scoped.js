export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // a
    const task = true;
    // b
    const task2 = false;
  }

  return [task, task2];
}

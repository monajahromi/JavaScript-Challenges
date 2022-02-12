function dropWhile(arr, fn) {
  let indexConditionIsNotFulfilled = arr.findIndex((v, i, a) => !fn(v, i, a));
  return arr.slice(indexConditionIsNotFulfilled);
}

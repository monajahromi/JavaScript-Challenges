function movingPartition(arr) {
  result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result = [...result, [arr.slice(0, i + 1), arr.slice(i + 1)]];
  }

  return result;
}

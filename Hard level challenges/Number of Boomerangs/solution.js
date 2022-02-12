function countBoomerangs(arr) {
  let sum = 0;

  arr.forEach((value, index) => {
    if (index < 1 || index >= arr.length - 1) return;

    if (
      value - arr[index - 1] == value - arr[index + 1] &&
      value - arr[index - 1]
    )
      sum++;
  });

  return sum;
}

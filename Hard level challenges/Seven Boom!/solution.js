function sevenBoom(arr) {
  return arr.filter((i) => /7/g.test(i)).length
    ? "Boom!"
    : "there is no 7 in the array";
}

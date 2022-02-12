function getLength(arr) {
  return arr && arr.length ? (arr.toString().match(/,/g) || []).length + 1 : 0;
}

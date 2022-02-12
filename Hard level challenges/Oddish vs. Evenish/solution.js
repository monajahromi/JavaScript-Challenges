function oddishOrEvenish(num) {
  return [...("" + num)].reduce((a, b) => a + +b, 0) % 2 ? "Oddish" : "Evenish";
}

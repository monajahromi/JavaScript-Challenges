function isDisarium(n) {
  return n == [...("" + n)].reduce((a, b, i) => a + b ** (i + 1), 0);
}

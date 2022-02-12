function colorPatternTimes(cols) {
  return cols.reduce((a, b, i) => a + (b == (cols[i - 1] || b) ? 2 : 3), 0);
}

function multiplicationTable(n) {
  return Array.from({ length: n }, (_, i) => i + 1).map((v, i, arr) =>
    arr.map((j) => j * v)
  );
}

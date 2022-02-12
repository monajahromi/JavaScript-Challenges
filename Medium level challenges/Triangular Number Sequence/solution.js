function triangle(n) {
  return n == 1 ? 1 : n + triangle(--n);
}

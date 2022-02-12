function mostExpensive(obj) {
  let max = Math.max(...Object.values(obj));
  return (
    `The most expensive one is the ` +
    Object.keys(obj).find((v) => obj[v] == max)
  );
}

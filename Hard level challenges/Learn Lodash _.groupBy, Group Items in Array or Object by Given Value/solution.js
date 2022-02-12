const myGroupBy = (collection, q) => {
  collection = Object.values(collection);
  switch (typeof q) {
    case "string":
      return collection.reduce(
        (a, c) => ((a[c[q]] = [...(a[c[q]] || []), c]), a),
        {}
      );
    case "function":
      return collection.reduce(
        (a, c) => ((a[q(c)] = [...(a[q(c)] || []), c]), a),
        {}
      );
    default:
      const [[k, v]] = Object.entries(q);
      return collection.reduce(
        (a, c) => ((a[c[k] === v] = [...(a[c[k] === v] || []), c]), a),
        {}
      );
  }
};

function daysUntil2021(date) {
  let days = (new Date("01-01-2021") - new Date(date)) / (1000 * 60 * 60 * 24);

  return `${days} ${days == 1 ? "day" : "days"}`;
}

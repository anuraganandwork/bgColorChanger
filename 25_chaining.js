const n = [2, 4, 5, 4, 3, 5, 6433, 52, 3];

const h = n
  .map((num) => num * 10)
  .map((num) => num * 10)
  .filter(function (num) {
    return num >= 500;
  });
console.log(h);

const list = [1, 22, 33, 11, 3];

function sumOf(a, b) {
  return a + b;
}
console.log(sumOf(44, 30));
console.log(sumOf(...list));

// ********************* rest operator *****************

// The rest parameter
// syntax allows us to represent an indefinite number of arguments as an array.

let sum = 0;
function giveSum(...input) {
  for (const i of input) {
    sum = sum + i;
  }
  return sum;
}
console.log(giveSum(1, 2, 3, 4, 5, 6));
console.log(giveSum(25, 20));

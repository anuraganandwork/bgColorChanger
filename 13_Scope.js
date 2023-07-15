//  global and block scope

function one() {
  let a = 234;
  let given = "Kumar Medicines";

  function two() {
    let b = 111;
    let content = "Inner";
    console.log(given);
  }
  // console.log(content);
  // two();
}
one();
// two();

function addOne(num) {
  return num + 1;
}
addOne(4);

// one more syntax of defining function
const addTwo = function (number) {
  return number + 2;
};
addOne(3);

console.log(addTwo(2));
console.log(addOne(8));

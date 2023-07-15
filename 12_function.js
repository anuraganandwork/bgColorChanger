// just like methods in java

function giveMyName() {
  console.log("Anurag");
}
const give = giveMyName();

// giveMyName .... it is a reference of function
// giveMyName()...it is calling of the function

// function giveSum(number1, number2) {
// console.log(number1 + number2);

// }

function giveSum(number3, number4) {
  let sum = number3 + number4;
  return sum;
}

console.log(giveSum(3, 4));
// giveSum(3, "a");

function getUserName(username) {
  if (username === undefined) {
    console.log("Plaese enter username");
    return;
  }
  return `User name is ${username}`;
}

console.log(getUserName("Anurag Anand"));
console.log(getUserName());

// ... is called as rest operator in js
function shoppingCart(...number) {
  return number;
}
console.log(shoppingCart(1, 2, 3, 4, 5));

const objectForFun = {
  guyName: "Ojha",
  guyAge: "22",
  guyGame: "Running",
};

function forGaming(anyObject) {
  console.log(
    `Hello ${anyObject.guyName} ,your age is ${anyObject.guyAge} , your game is ${anyObject.guyGame}`
  );
}
forGaming(objectForFun);

let givenArray = [200, 300, 400, 500];
function printArray(anyArray) {
  return anyArray[2];
}

console.log(printArray(givenArray));

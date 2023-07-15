let numbers = [1, 11, 11, 1111, 1111, 1111];
for (let num of numbers) {
  console.log(num);
}
let greeting = "Hello World";
for (const greet of greeting) {
  console.log(greet);
}

// ********** map  *******************

const map = new Map();
map.set("n", "Anurag");
map.set("age", 22);
map.set("uniqueness", "Disciplined");
// console.log(map);
map.set("n", "Anurag Anand");
// console.log(map);

// for (const key of map) {
//   console.log(key);
// }
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObj = {
  game1: "Running",
  game2: "Football",
  game3: "Lawn Tennis",
};
// console.log(myObj);

// for (const [key, value] of myObj) {
//   console.log(key);
// } itteretor wala concept object pe nhi lgega

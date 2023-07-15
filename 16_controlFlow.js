// if statement

if (true) {
  // then this code will be executed
}
if (2 == "2") {
  console.log("Executed code");
}
if (2 === "2") {
  console.log("Executed code");
}
// === ,!== checks datatype also
// if and else mein se koi ek hi code execute hoga

let score = 96;
if (score > 90) {
  console.log("Congrats,you got A grade");
} else {
  console.log("Try harder");
}

const userNameFilled = true;
const emailIdFilled = true;
const mobNoFilled = false;
const loggedInWithGoogle = true;
const loggedInWithEmail = false;
const user = "Anurag";

if (userNameFilled && emailIdFilled && mobNoFilled) {
  console.log("Everything is right, go on!");
} else {
  console.log("Not filled properly");
}

if (loggedInWithEmail || loggedInWithGoogle) {
  console.log(`Welcome to the platform ${user}`);
}

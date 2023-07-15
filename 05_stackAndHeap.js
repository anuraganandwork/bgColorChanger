let myName = "Anurag";
let secondName = myName;
secondName = "Anand";
console.log(secondName);
console.log(typeof secondName);
console.log(myName);
// String ka copy milta hai , so wo originally change nhi hota hai

let userOne = {
  email: "Honey@gmail.com",
  pass: "PAAS",
};

let userTwo = userOne;
userTwo.email = "DaburHoney@gmail.com";

console.log(userTwo.email);
console.log(userOne.email);
console.log(typeof userOne);

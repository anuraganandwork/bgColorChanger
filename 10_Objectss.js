// Singleton .... constructors se bnta hai
//  object literals

// Important

let myKey1 = Symbol();
const myObject = {
  name: "AnuragAnand",
  age: 22,

  // syntax for symbol
  [myKey1]: "Using Symbol",
  city: "Muzaffarpur",
  loggedIn: true,
  lastLoggedIn: ["Monday", "Tuesday"],
  "Full name": "Anurag Anand Ojha",
};

// console.log(myObject.lastLoggedIn);
// console.log(myObject["loggedIn"]);
// console.log(myObject.loggedIn);
// console.log(myObject["Full name"]);
// console.log(myObject);
console.log(typeof myKey1);

// this is how symbol will be called
console.log(myObject[myKey1]);

myObject.city = "Bangalore";
// Object.freeze(myObject);
myObject.city = " Mumbai ";
// console.log(myObject);

myObject.greeting = function () {
  console.log("Hello user");
};
console.log(myObject.greeting());
console.log(myObject.greeting);

myObject.greetingTwo = function () {
  console.log(`Heloo User, ${this.name} , you are a natural`);
};

console.log(myObject.greetingTwo());

// object using constructor
// singleton

const uberUser = new Object();
// const uberUser = {};
uberUser.name = "Vishal";
uberUser.age = 22;
uberUser.isLoggedIn = true;
uberUser.usageTime = "2 Hrs ";

// console.log(uberUser);

const newUser = new Object();
// console.log(newUser);

(newUser.name = {
  firstName: "Ambuj",
  lastName: "Singh",
  fullName: {
    full: "Ambuj Singh",
  },
}),
  (newUser.email = "ambuj.singh@gmail.com"),
  (newUser.loggedIn = true);
console.log(newUser.name.fullName.full);

const obj1 = {
  1: "Aa",
  2: "Bb",
};
const obj2 = {
  3: "Cc",
  4: "Dd",
};
//  Here keys are in the form of number

// const obj3 = { obj1, obj2 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(uberUser));
// return type of the above is array

console.log(Object.values(uberUser));

console.log(Object.entries(uberUser));
console.log(uberUser.hasOwnProperty("age"));

// ***********     Destructuring   ************

// const { usageTime } = uberUser;
// console.log(usageTime);

const { usageTime: uT } = uberUser;
console.log(uT);

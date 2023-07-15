const user = {
  userName: "Anurag Anand",
  paymentStatus: "Completed",
  // userID: userName + paymentStatus,
  cart: function () {
    console.log(`Your cart is ready, CHeck out now ${this.userName}`);
    console.log(this);
  },
};
user.cart();

console.log(this);

// this. ka use bs hm object mein hi kr skte hain not for function

function chai() {
  console.log(this);
}
chai();

function coffee() {
  let sugar = "30gm";
  console.log(this.sugar);
}
coffee();

// *****************   ARROW Function     **********************
//  arrow function in js is very similar to lambda function in java

const greenTea = () => {
  let stuff = 10;
  console.log(this.stuff);
};
greenTea();

// function is replaced by => in arrow function

// const arrowF = (num1, num2) => {
//   return num1 + num2;
// };

const arrowF = (num1, num2) => num1 + num2;
//  this is called implicit return
console.log(arrowF(8, 7));

// curly brases jb use krenge then return keyword likhna hoga and jb curly braces use nhi krenge then return keyword nhi likhna prega

// A callback function is a function which is passed as a
// arguement to another function

function calculate(a, b, operation) {
  return operation(a, b);
}

// passing anonymous function, this is also the way
const result = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});
// const result= calculate()
console.log(result);

function addition(num1, num2) {
  return num1 + num2;
}

// callBack function ko call nhi krna h bs uska reference dena hai
const r2 = calculate(8, 7, addition);
console.log(r2);

const a = [1, 2, 3, 4, 5, 6, 7, 777, 66];

a.forEach(function (num, i) {
  console.log(num, i);
});

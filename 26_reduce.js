const a = [11, 22, 33, 44, 55, 66];

const initialValue = 0;
// const usingReduce = a.reduce(function (acc, currVal) {
//   console.log(currVal);
//   console.log(acc);
//   acc = acc + currVal;
//   return acc;
// }, 9);
// console.log(usingReduce);

const usingReduceWithArrow = a.reduce((acc, currVal) => {
  acc = acc + currVal;
  return acc;
}, 0);
console.log(usingReduceWithArrow);

const shoppingCart = [100, 799, 2000, 1300];

const amountToPay = shoppingCart.reduce(function (acc, currVal) {
  acc = acc + currVal;
  return acc;
}, 0);
console.log(`Total amount to be paid ${amountToPay}`);

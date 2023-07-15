const product = [
  "amazon-relaited",
  "for tier two Indians",
  "Without subscription",
];

// product.forEach(function (i) {
//   console.log(`these are the goals: ${i}`);
// });

// product.forEach((j) => {
//   console.log(`Here are the values ${j}`);
// });

function printMe(item) {
  console.log(`Printing ${item}`);
}

product.forEach(printMe);

const block = [
  {
    colour: "Black",
    fav: "Read",
    Book: "Indistractable",
  },
  {
    language: "javascript",
    previous: "java",
    fav: "ReactNative",
  },
];

block.forEach((item) => {
  console.log(item.fav);
});
// important

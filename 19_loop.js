let element = 0;
// for (let index = 0; index <= 100; index++) {
//   element = index;
// }
// console.log(element);

for (i = 0; i < 5; i++) {
  console.log("Outer for loop");
  for (j = 0; j < 10; j++) {
    console.log("Inner for loop");
  }
}

let myArray = ["Anurag", "Anand", "Yayaya", "Virat Kohli"];
for (let index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}

for (let j = 0; j < 10; j++) {
  if (j === 8) {
    console.log(`Detected value of j=${j}`);
    break;
  }
  console.log(`Value of j is ${j}`);
}

for (k = 0; k < 8; k++) {
  if (k === 4) {
    console.log(`Value of k is detected ${k}`);
    continue;
    // continue statement ko ek bar run hone deta hai condition matxch hone k bad
  }
  console.log(`Value of k is ${k}`);
}

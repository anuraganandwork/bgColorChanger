// const { log } = require("async");

function one(i) {
  console.log(i);
}
function two(i) {
  const t = setInterval(function e() {
    console.log("Interval was running");
  }, 5000);
  console.log(i);
  // clearInterval(t);
}
function three(i) {
  console.log(i);
}

one(9);
// two(8);
three(7);

const seller = new Promise(function f(resolve, reject) {
  const my = "Anurag";
  const her = "Anurag";
  if (my === her) {
    resolve();
  } else reject();
});

Promise.then(
  function accept() {
    console.log("Hurrahh!, your task got done");
  },
  function rezect() {
    console.log("Oops!,Try again");
  }
);

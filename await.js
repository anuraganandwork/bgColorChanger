const one = () => {
  return "The number is one.";
};
const two = () => {
  return new Promise(function (resolve, reject) {
    setInterval(function tha() {
      resolve("The number is two.");
    }, 3000);
  });
};
const three = () => {
  return "The number is three.";
};
let callMe = async () => {
  let Rone = one();
  console.log(Rone);

  let Rtwo = await two();
  console.log(Rtwo);

  let Rthree = three();
  console.log(Rthree);
};
callMe();

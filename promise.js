/*const users = ["Anurag", "Anand", "Ojha", "Ambuj", "Singh"];
const orderId = "12345";
const promise = giveUserName(users);
promise
  .then(console.log(orderId))
  // .then(function () {
  //   paymentFurther();
  // })
  .catch(function (err) {
    console.log(err.message);
  });

function giveUserName(users) {
  return new Promise(function (resolve, reject) {
    if (users[2] === "Ojha") {
      const err = new Error("Name entered is wrong");
      reject(err);
    }

    // const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
}
//  call back function is bit diferent check it
giveUserName(users);
*/
const ahah = (any) => {
  console.log(`${any}`);
};

ahah("Anurag , you are the best");

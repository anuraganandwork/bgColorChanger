// promises works in two states
// in first you have to create and in second you have to use

const medicine = new Promise(function (resolve, reject) {
  const medicineAvailable = false;
  if (medicineAvailable) {
    resolve();
  } else {
    reject();
  }
});

medicine
  .then(() => {
    console.log("Yes , required medicine is available");
  })
  .catch(() => {
    console.log("Empty stock,please give order");
  })
  .finally(() => {
    console.log("Talk to customers very politely");
  });

// resolve is connected to then and reject is connect to then
// inside then and catch , callback func. are passed

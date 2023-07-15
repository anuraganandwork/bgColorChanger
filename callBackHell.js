console.log("Anurag is building");
console.log("Yes, he is in a building state");
// setInterval(function () {
//   console.log("OMG!");
// }, 5000);

console.log("Hmmm, he is good");

const firstName = (callBack) => {
  const Fname = "Anurag";
  console.log("Full name is ");
  callBack(Fname);
};

const secondName = (Fname, callBack) => {
  let Sname = `${Fname} Anand`;
  callBack(Sname);
};

const thirdName = (Sname, callBack) => {
  let Tname = `${Sname} works`;
  callBack(Tname);
};

firstName((Fname) => {
  secondName(Fname, (Sname) => {
    thirdName(Sname, (Tname) => {
      console.log(Tname);
    });
  });
});

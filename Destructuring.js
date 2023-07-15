// for destructuring whatever data type is on the right hand side similar
// data type should be on the left hand side

const user = ["Anurag Anand", "CTO", "10 Million Dollar"];

let [names, jobs, netWorth] = user;
// array ki destructuering mein order same hona chahiye
console.log(jobs);

const starter = {
  nam: "Anand",
  job: "founding team",
};

// const { giveName, giveJob } = starter;
// console.log(giveJob);
// in destructuring the object names of variable should also match

const { nam, job } = starter;
console.log(nam);

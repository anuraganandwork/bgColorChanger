let myArr = [1, 2, "anu"];
console.log(myArr[2]);
let arr = new Array(1, 2, 2, 3, 3, 4);
myArr.push(45);
myArr.pop();
myArr.unshift(233);
console.log(myArr);
// myArr.shift will be used to remove the firt member
const newarr = myArr.join();

let mynew = [11, 22, 33, 44, 55];
console.log("A ", mynew);

let mynewSec = mynew.slice(1, 3);
console.log("B ", mynewSec);
console.log(mynew);

let splicedArray = mynew.splice(1, 3);
console.log("C ", splicedArray);
console.log(mynew);

const retail_busi = ["Marico", "BombayShaving", "Divisa", "Litchica"];
const tech_busi = ["Zerodha", "Zomata", "Zoho"];
// retail_busi.push(tech_busi);
// // console.log(retail_busi);

// const merging = retail_busi.concat(tech_busi);
// console.log(merging);
// console.log(retail_busi);
// const all_business = [...retail_busi, ...tech_busi];
// console.log(all_business);
console.log(Array.isArray("Anurag"));
console.log(Array.from("Anuyrag"));
console.log(Array.of(100, 111, 1221, 2312, 12));
// console.log(retail_busi.from(tech_busi));
console.log(retail_busi);

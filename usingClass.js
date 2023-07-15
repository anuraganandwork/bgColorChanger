// import user from "./class.js";

const user = require("./class.js");
// importing

const customer = new user("Anna", 35);
console.log(customer.getInfo());

customer.addMember("Nikhil Kamath", 35);

customer.addMember("Nithin Kamath", 42);
customer.addMember("Mukesh", 45);

// console.log(customer.ageList);
console.log(customer.getAgeList());

const buyer = new secondUser();
console.log(buyer.giveAnother());

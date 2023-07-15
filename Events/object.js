const obj1 = {
  name: "Aradhya Kaushik",
  age: "10 Year",
  loveTodo: "Building products",
};

const obj2 = {
  userName: "Ojha",
  logInRate: "often",
  device: "android",
};

Object.assign(obj1, obj2);

console.log(obj1);

// console.log(obj1 === obj3);
const obj4 = Object.create(obj1);

console.log(obj4);

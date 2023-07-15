let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
let myCreatedDate = new Date(2023, 1, 14, 17, 30, 0);
console.log(myCreatedDate);

console.log(Date.now());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
newDate.toLocaleString("default", {
  weekday: "long",
});

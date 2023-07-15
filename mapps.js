const myMap = new Map();
// As we can see, unlike objects, keys are not converted to strings.
// Any type of key is possible.
myMap.set(1, "Anurag");
myMap.set(2, "Anu Priya");
myMap.set("a", "Shanu Priya");

console.log(myMap);
// console.log(typeof myMap[0].keys);

for (let key of myMap.keys()) {
  console.log(`Keys are ${key}`);
  console.log(typeof key);
}
// for each loop will always give values

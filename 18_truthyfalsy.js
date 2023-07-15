// falsy values in javascript

// false,0,-0,BigInt 0n,"",null,undefined ,NaN
//  except these all are truthy values

// /truthy values in javascript
// some exception

// "0", "False", " ", [],{},function(){};

// Nullish coaleshing operator (??): null undefined

// dono mein se koi bhi ek assing ho sakta hai
/*The nullish coalescing (??) operator is a logical operator that returns 
its right-hand side operand when its left-hand side operand is null or 
undefined, and otherwise returns its left-hand side operand.*/

// let value = 5 ?? 10;
// let value = null ?? 10;
// let value = undefined ?? 15;
let value = null ?? 10 ?? 15;
console.log(value);

// ****************   Terniary Operetor  **************
// condition ? true : false;

costOfIce = 40;

costOfIce >= 50 ? console.log("I can buy") : console.log("Low quality");

function init() {
  let firstName = "AnuragAnand";

  function sayName() {
    console.log(`Inner function is running ${firstName}`);
  }
  return sayName;
}

// a closure gives
// you access to an outer function's scope from an inner function.

let val = init();
// console.log(val);
val();

// curring ...see in docs

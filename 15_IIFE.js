// Why we use IIFE

/*global scope k pollution se problem hoti hai kai baar, 
global k variables ka pollution ko htane k liye hmne IIFE ka use kiya */

/*Because our application could include
 many functions and global variables from different source
  files, it's important to limit the number of global variables. If we have some initiation code that we don't 
  need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case
   is better than using a function declaration or a function expression.*/

//  IIFE practise

(function dippi() {
  console.log("He said, The more you walk, the more you see");
})();
// names IIFE

// IIFE wale functon ko alg se call krne ki zarurat nhi h

(() => {
  console.log("He is reading the book called 'The man searching for meaning");
})();

// if we have to write two IIFE in one file , then it should must be separated by semicolon

(function selfExecuting() {
  console.log("This function is self executing");
})();

// selfExecuting();

(function () {
  console.log("This function is self executing");
})();

// 1>  Number to String Coercion

const num = 42;         // Number
const str = "Hello, ";  // String

const result = str + num;  // JavaScript automatically converts num to a string
console.log(result);       // Output: "Hello, 42"

// Example 2: String to Number Coercion

const num1 = "5";   // String
const num2 = 3;     // Number

const sum = num1 + num2;  // JavaScript converts num2 to a string and performs string concatenation
console.log(sum);         // Output: "53"



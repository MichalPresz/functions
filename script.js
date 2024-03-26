// Calculator
// add
function add(a, b) {
    return a + b;
  }
  
  // subtract
  function subtract(a, b) {
    return a - b;
  }
  
  // multiply
  function multiply(a, b) {
    let product = a * b; // we can do as much code as we like before the return in a functions
    return product;
  }
  
  // divide
  function divide(a, b) {
    return a / b;
  }
  
//   calculate (putting it all together)
//   function calculate(a, b, operator) {
//     switch (operator) {
//       case "+":
//         return add(a, b);
//       case "-":
//         return subtract(a, b);
//       case "*":
//         return multiply(a, b);
//       case "/":
//         return divide(a, b);
//       default:
//         return "Invalid operator";
//     }
//   }
  function calculate(a, b, operator) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
  }

  const result = calculate(1, 5, "+");
console.log("The result is", result); // Output: The result is 6

const anotherResult = calculate(2, 10, "*");
console.log("Another result is", anotherResult); // Output: Another result is 20
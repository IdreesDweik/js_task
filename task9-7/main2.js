var operation = prompt("Enter the operation (+, -, *, /):");
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

var result;

if (operation === "+") {
  result = number1 + number2;
} else if (operation === "-") {
  result = number1 - number2;
} else if (operation === "*") {
  result = number1 * number2;
} else if (operation === "/") {
  result = number1 / number2;
} else {
  console.log("Invalid operation!");
}

console.log("Operation: " + operation);
console.log("Number 1: " + number1);
console.log("Number 2: " + number2);
console.log("Result: " + result);

document.write("<h2>Operation: " + operation + "</h2>");
document.write("<p>Number 1: " + number1 + "</p>");
document.write("<p>Number 2: " + number2 + "</p>");
document.write("<p>Result: " + result + "</p>");
function smallerNubmer() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
  
    return Math.min(num1, num2, num3);
  }
  
  var smallest = smallerNubmer();
  console.log("The smallest number is: " + smallest);
function average() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourt number:"));
    var num5 = parseFloat(prompt("Enter the fifth number:"));
  
    return ((num1 + num2 + num3 + num4 + num5) / 5);
  }
  
  var avg = average();
  console.log("The avarege number is: " + avg);
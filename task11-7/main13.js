function shorterString() {
    var string1 = prompt("Enter the first string:");
    var string2 = prompt("Enter the second string:");
    var string3 = prompt("Enter the third string:");
    var string4 = prompt("Enter the fourth string:");
    var string5 = prompt("Enter the fifth string:");
  
    var findShortestString = string1;
    if (string2.length < findShortestString.length) {
        findShortestString = string2;
    }
    if (string3.length < findShortestString.length) {
        findShortestString = string3;
    }
    if (string4.length < findShortestString.length) {
        findShortestString = string4;
    }
    if (string5.length < findShortestString.length) {
        findShortestString = string5;
    }
    return findShortestString;
  }
  
  var shortest = shorterString();
  console.log("The shortest string is: " + shortest);
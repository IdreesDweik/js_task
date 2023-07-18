function longerString() {
    var string1 = prompt("Enter the first string:");
    var string2 = prompt("Enter the second string:");
    var string3 = prompt("Enter the third string:");
    var string4 = prompt("Enter the fourth string:");
    var string5 = prompt("Enter the fifth string:");
  
    var findLongestString = string1;
    if (string2.length > findLongestString.length) {
        findLongestString = string2;
    }
    if (string3.length > findLongestString.length) {
        findLongestString = string3;
    }
    if (string4.length > findLongestString.length) {
        findLongestString = string4;
    }
    if (string5.length > findLongestString.length) {
        findLongestString = string5;
    }
    return findLongestString;
  }
  
  var longest = longerString();
  console.log("The longest string is: " + longest);
let x = Number(prompt("Please enter your first number"));
let y = Number(prompt("Please enter your second number"));
let z = Number(prompt("Please enter your third number"));

let n = [x, y, z];

let str = n.map(e => e.toString());
console.log(str);
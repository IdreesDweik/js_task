let n = prompt("Please enter two numbers, ex (number, number)");
n = n.split(",").map(Number);

function multiply(){
    x = n[0] * n[1];
    console.log(x + " is the multiply of " + n[0] + ", " + n[1]);
}
multiply();
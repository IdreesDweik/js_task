let n = prompt("Please enter your age and the ammount of every day, ex (age, ammount)");
n = n.split(",").map(Number);

function calculateSupply(){
    n[0] = (100 - n[0]) * 365 * n[1];
    console.log("You will need " + n[0] + " ammount to last you until the ripe old age of 100")
}
calculateSupply();
let dogAge = Number(prompt("Please enter your dog age"));

function calculateDogAge(){
    dogAge = dogAge / 7;
    console.log("Your doggie is " + dogAge + " years old in dog years!");
}

calculateDogAge();
function randomBetweenNumbers(){
    let min = parseFloat(prompt("Enter the min number:"));
    let max = parseFloat(prompt("Enter the max number:"));
    console.log(Math.random() * (max - min) + min);   
}
randomBetweenNumbers();
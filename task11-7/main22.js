let n = parseFloat(prompt("Enter the number:"));

function scoreInUniversty(){
    switch(true){
        case n >= 95 && n <= 100:
            n = "A";
            break;
        case n >= 85 && n <= 94:
            n = "B";
            break;
        case n >= 70 && n <= 84:
            n = "C";
            break;
        case n >= 50 && n <= 69:
            n = "D";
            break;
        case n >= 0 && n <= 49:
            n = "F";
            break;
        default:
            n = "Invalid";
            break;
    }
}
scoreInUniversty();
console.log(n);
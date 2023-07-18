function isOdd(){

    let num = parseFloat(prompt("Please enter your number"));

    if( (num % 2) === 0){
        console.log("false");
    } else{
        console.log("true");
    }
}
isOdd();
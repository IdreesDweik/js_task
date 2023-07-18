function isEven(){

    let num = parseFloat(prompt("Please enter your number"));

    if( (num % 2) === 0){
        console.log("true");
    } else{
        console.log("false");
    }
}
isEven();
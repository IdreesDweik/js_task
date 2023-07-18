let age = Number(prompt("Please enter your age"));

function canIGetADrivingLicense(){
    if( age >= 20 ){
        console.log("yes you can");
    }
    else{
        x = 20 - age;
        console.log("please come back after " + x + " years to get one");
    }
}
canIGetADrivingLicense();
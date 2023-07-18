let n = prompt("Enter your job title, your contry, your patner's name and how many kids u have, ex (name, contry, .....)");
n = n.split(",");

function tellFortune(){
    console.log("You will be a " + n[0] + " in " + n[1] + " , and married to " + n[2] + " with " + n[3] + " kids.");
}
tellFortune();
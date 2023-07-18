function fullName(){
    let namae = prompt("Please enter your first name and your second name, ex (fname, sname)");
    namae = namae.split(",");
    console.log(namae[0] + " " + namae[1]);
}
fullName();
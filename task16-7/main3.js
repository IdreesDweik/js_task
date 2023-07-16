let x = prompt("Please enter your first word");
let y = prompt("Please enter your second word");
let z = prompt("Please enter your third word");

const str = [x, y, z];
let data= str.map((d,i)=>{
      return d.charAt(0).toUpperCase() + d.slice(1).toLowerCase();

})
console.log(data);
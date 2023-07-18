let n = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"},
         {first: 'Colt', last:"Steele"}];
let data = n.map(e => `${e.first} ${e.last}`);
console.log(data);
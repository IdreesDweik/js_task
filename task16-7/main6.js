let readyToPutInTheDOM = ([
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]); 

     let data = readyToPutInTheDOM.map(e => `<h1>${e.name}</h1><h2>${e.age}</h2>`);
     console.log(data);
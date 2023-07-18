const makeStrings = ([
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

 let data = makeStrings.map(e => ageCheck(e));

    function ageCheck(e) {
        if (e.age <= 18){
            result = `${e.name} is under age!!`;
        }
        else {
            result = `Andrew tate allows ${e.name} to go to the matrix`;
          }
        return result;
    }
    console.log(data);
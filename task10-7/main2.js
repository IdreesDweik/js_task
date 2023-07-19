let counter = '';
let n = 1;
  for(let i = 0 ; i < 5 ; i++){
    for(let x = 0 ; x < i ; x++)
    counter += n++ + ' ';
    counter += '\n';
  }
  console.log(counter);
function showFirstAndLast(arr){
    let newarray = [];
    arr.forEach(e => newarray.push(e[0]+e.at(-1)));
    return newarray;
  }

showFirstAndLast(arr);
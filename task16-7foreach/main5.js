function vowelCount(str){
    str = str.split('').map(e => e.toUpperCase())
    obj = {}
    str.forEach(e => {
      switch(e){
        case 'A':
          obj[e] ? obj[e]++ : obj[e] = 1
          break;
        case 'E':
          obj[e] ? obj[e]++ : obj[e] = 1
          break;
        case 'I':
          obj[e] ? obj[e]++ : obj[e] = 1
          break;
        case 'O':
          obj[e] ? obj[e]++ : obj[e] = 1
          break;
        case 'U':
          obj[e] ? obj[e]++ : obj[e] = 1
          break;
      }
    })
    return obj;
  }
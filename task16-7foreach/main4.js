function addKeyAndValue(arr,key,value){
  let array = [];
  arr.forEach(e => {
    e[`${key}`] = value;
  });
  return arr;
}
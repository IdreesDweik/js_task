var counter = 0;

function incrementCounter() {
  return ++counter;
}

function resetCounter() {
  var previousNumber = counter;
  counter = 0;
  return { numberBeforeReset: previousNumber, resetMessage: "The counter has been reset." };
}

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
var resetInfo = resetCounter();
console.log(resetInfo.numberBeforeReset);
console.log(resetInfo.resetMessage);

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
resetInfo = resetCounter();
console.log(resetInfo.numberBeforeReset);
console.log(resetInfo.resetMessage);

console.log(incrementCounter());
resetInfo = resetCounter();
console.log(resetInfo.numberBeforeReset);
console.log(resetInfo.resetMessage);
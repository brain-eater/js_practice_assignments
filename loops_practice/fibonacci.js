let number = 10;
let previousNumber = 1;
let secondPreviousNumber = 0;
console.log( secondPreviousNumber );
console.log( previousNumber );
for(let termNumber = 2 ; termNumber <= number; termNumber++){
  console.log(secondPreviousNumber+previousNumber);
  let lastPreviousNumber=previousNumber;
  previousNumber = previousNumber + secondPreviousNumber;
  secondPreviousNumber = lastPreviousNumber;
}


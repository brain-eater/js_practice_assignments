let firstNumber = 35;
let secondNumber = 28;
let smallestOfTwoNumber = Math.min(firstNumber,secondNumber);
for(let divisor = smallestOfTwoNumber; divisor > 0; divisor--){
  if( firstNumber % divisor == 0 && secondNumber % divisor ==0){
    console.log("The GCD of",firstNumber,"and",secondNumber,"is",divisor);
    process.exit();
  }
}


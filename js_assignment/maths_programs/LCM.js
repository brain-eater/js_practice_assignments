let firstNumber = 21;
let secondNumber = 6;
let firstNumMultiplier = 1;
for(let multiplier = 1; multiplier <=secondNumber; multiplier++){
  firstNumMultiplier = firstNumber*multiplier; 
  if( firstNumMultiplier % secondNumber == 0 ){
    console.log("The LCM is",firstNumMultiplier);
    process.exit();
  }
}


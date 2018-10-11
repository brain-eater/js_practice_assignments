let firstNumber=5 ;
let lastNumber = 10 ;
let sum = 0 ;
for(let number = firstNumber ; number <= lastNumber ; number++){
  if(number%2 != 0){
    sum += number;
  }
}
console.log(sum);

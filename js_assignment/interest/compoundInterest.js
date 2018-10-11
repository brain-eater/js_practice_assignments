let principle=10000;
let period=2;
let interest=10;
let ciWithoutPrinciple=Math.pow((1+(interest/100)),period);
let compoundInterest=principle*ciWithoutPrinciple;
console.log(compoundInterest);


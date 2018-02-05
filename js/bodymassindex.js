var bmi = function(number1, number2) {
  return (number1 / Math.pow(number2*12,2)*703);
};

var number1 = parseInt(prompt("What is your weight in lbs?"));
var number2 = parseInt(prompt("What is your height in feet?"));

var result = bmi(number1, number2);
alert(result);

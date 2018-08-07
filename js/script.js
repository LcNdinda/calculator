// var add = function(number1, number2){
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);
//
// var multiply = function(number1, number2){
//   return number1 * number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);
//
// var divide = function(number1, number2){
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);
//
// var sub = function(number1, number2){
//   return number1 - number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = sub(number1, number2);
// alert(result);

//BMI CALCULATION

// var BMI = function(weight, height){
//   return weight/(height*height);
// };
// var result = BMI(70,1.75).toFixed(1)
// alert(result);
//
// var BMI = function(weight,height){
//   return weight/(height*height);
// };
// var Weight =parseFloat(prompt("Enter your Weight in KG"));
// var Height =parseFloat(prompt("Enter your Height in Meters"));
// var result = BMI(Weight, Height).toFixed(1);
// alert(result);

//FARENHEIGHTS CALCULATION

// var temp = function(temperature){
//   return temperature +1.8 + 32;
// }
// var degree = parseFloat(prompt("Enter temperature in Degrees"));
// var result = temp(degree);
// alert(result);

// Cooking app- converting litres to gallon

//   function cook(gallon){
//   return gallon * 3.79;
// };
//
// var litres = parseFloat(prompt("Enter Quantity in Gallon"));
// var result = cook(litres);
// alert(result);

// Grade CALCULATION
//
// var grade = function(maths, English, Kiswahili){
// return(maths + English + Kiswahili)/3;
// };
//
// var mao = parseInt(prompt("Enter grade of Mathematics"));
// var eng = parseInt(prompt("Enter grade of English"));
// var swa = parseInt(prompt("Enter grade of Kiswahili"));
// var result = grade(mao, eng, swa);
//
// if(result>79){
// console.log("Grade is A");
// }
// else if(result>59){
// console.log("Grade is B");
// }
//
// else if(result>39){
// console.log("Grade is c");
// }
// else if(result>19){
// console.log("Grade is D");
// }
// else{
// console.log("Grade is E");
// }


// WEATHER APP

// var weather = function(temp, weather){
//   alert(weather);
//
// };

var temperature = parseFloat(prompt("Enter Temperature in Degrees"));
var weath = confirm("Is it raining");

if (temperature < 0) {
  alert("Don't Freeze out there");
}
else if (temperature < 15 && weath === true){
  alert("Don't forget your Jacket");
}

else if (temperature < 25){
  alert("Have a nice day");
}

else {
  alert("Keep cool today");
}

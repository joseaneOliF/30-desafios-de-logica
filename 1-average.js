// VERY EASY

/* O desafio pede que escreva uma função que recebe um número qualquer de números inteiros como argumento e retorne a média aritmética entre eles */

//FOR

// function average (numbers) {
// let sum = 0;

// for(let index = 0; index < numbers.length; index ++) {
//   sum += numbers[index]
// }
// const average = sum / numbers.length

// return average
// };


//FOREACH
// function average (numbers) {
// let sum = 0;

// numbers.forEach(number => {
//   sum += number
// });
// const average = sum /numbers.length;
// return average

// };


//REDUCE
// function average (numbers) {

// const sum = numbers.reduce((acc, num) => acc += num, 0)

// return sum / numbers.length
// };

//SPREAD

function average (...numbers) {

  const sum = numbers.reduce((acc, num) => acc += num, 0)
  
  return sum / numbers.length
  };

console.log(average(5, 7, 10, 9));
console.log(average(8, 9, 7, 8));
console.log(average(10, 9, 10, 8));
console.log(average(7, 7, 8, 7));
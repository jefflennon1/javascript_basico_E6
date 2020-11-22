"use strict";

var numbers = [1, 2, 3, 5, 6, 9];
var exibeNumbers = numbers.map(function (item, index) {
  return item * index;
});
console.log(numbers);
var somaNumebrs = numbers.reduce(function (total, proximo) {
  return total + proximo;
});
console.log(somaNumebrs);
var filterNumbers = numbers.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterNumbers);
var findNumbers = numbers.find(function (item) {
  return item === 2;
});
console.log(findNumbers);

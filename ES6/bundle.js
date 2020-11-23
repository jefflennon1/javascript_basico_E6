"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
console.log(findNumbers); // REST OPERATOR

var usuario = {
  nome: "jefferson",
  idade: "26",
  endereco: {
    rua: "joao teixeira",
    numero: " 132"
  }
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome, resto);

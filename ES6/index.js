const numbers = [1,2,3,5,6,9];

const exibeNumbers = numbers.map((item, index) => item * index);
console.log(numbers);

const somaNumebrs = numbers.reduce((total, proximo)=>total + proximo);
console.log(somaNumebrs);

const filterNumbers = numbers.filter(item => item % 2 === 0);
console.log(filterNumbers);

const findNumbers = numbers.find(item => item === 2);
console.log(findNumbers);

// REST OPERATOR
const usuario = {
  nome: "jefferson",
  idade: "26",
  endereco: {
    rua : "joao teixeira",
    numero : " 132"
  }
}
const {nome, ... resto} = usuario;
console.log(nome, resto);


function soma(... params){
  return params.reduce((total, next)=> total + next)
}
console.log(soma(3,4, 7, 7));

// spread 

const arr1 = [1,2,3,4,5];
const arr2 = [6,1,5,8];

const arr3 = [...arr1, ...arr2]

console.log(arr3);
const numbers = [1,2,3,5,6,9];

const exibeNumbers = numbers.map((item, index)=>{
  return item * index;
})

console.log(numbers);

const somaNumebrs = numbers.reduce((total, proximo)=>{
  return total + proximo;
})
console.log(somaNumebrs);

const filterNumbers = numbers.filter((item)=>{
  return item %2 === 0;
})
console.log(filterNumbers);

const findNumbers = numbers.find((item)=>{
  return item === 2;
})
console.log(findNumbers);
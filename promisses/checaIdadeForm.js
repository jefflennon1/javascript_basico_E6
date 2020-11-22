function clickAction(){
  var idadeinput = document.getElementById('idade');
  var idade = idadeinput.value;
    function checaIdade(){
      return new Promise((resolve, reject)=>{
        if(idade > 18){
          resolve('Maior do que 18 anos! 😎');
        }else{
          reject('Menor do que 18! 🙁')
        }
      })
    }
checaIdade()
.then((response)=>{
  console.log(response);
  console.log(idade);
})
.catch((error)=>{
  console.log(error);
  console.log(idade);
})

}






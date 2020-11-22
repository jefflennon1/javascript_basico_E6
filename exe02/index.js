function buscaUser(){
  var user = document.getElementById('userId').value;
  
  function promiseUserGitHub (){
   return  new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.github.com/users/${user}`);
      xhr.send(null);

      xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            resolve('Esse usuário existe! 😁');
          }else{
            reject('Esse usuário nao existe!')
          }
        }
      }
      
    })
  }

  promiseUserGitHub()
  .then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
    console.warn(error);
  })
}
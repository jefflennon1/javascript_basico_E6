var minhaPromisse = ()=>{
  return new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/jefflennon1');
      xhr.send(null);

      xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.responseText));
          }else{
            reject('ERRO');
          }
        }
      }
  })
}

minhaPromisse()
  .then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
    console.warn(error)
  })


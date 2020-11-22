axios.get('https://api.github.com/users/jefflennon1')
.then((response)=>{
  console.log(response);
})
.catch((error)=>{
  console.warn(error);
})
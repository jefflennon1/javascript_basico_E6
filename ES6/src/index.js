const MinhaPromise = ()=> new Promise((resolve, reject)=>{
   setTimeout(()=>{resolve('ok')}, 2000);
})


// MinhaPromise().then((response)=>{
//   console.log(response);
// }).catch((error)=>{
//   console.log(error);
// })

async function executaPromisse(){
  console.log( await MinhaPromise());
  console.log( await MinhaPromise());
  console.log( await MinhaPromise());
}


executaPromisse();

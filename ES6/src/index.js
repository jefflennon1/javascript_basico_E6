// const MinhaPromise = ()=> new Promise((resolve, reject)=>{
//    setTimeout(()=>{resolve('ok')}, 2000);
// })
// // MinhaPromise().then((response)=>{
// //   console.log(response);
// // }).catch((error)=>{
// //   console.log(error);
// // })

// async function executaPromisse(){
//   console.log( await MinhaPromise());
//   console.log( await MinhaPromise());
//   console.log( await MinhaPromise());
// }
// executaPromisse();

import axios from 'axios';

class Api{
  static async getUserInfo(username){
     try{
          const response = await axios.get(`https://api.github.com/users/${username}`);
         console.log(response)
      } catch (err){
          console.warn('User not found!');
      }
  }
}

Api.getUserInfo('jefflennon15454545');


import axios from 'axios'
import store from '../../vuex/store'
import {baseUrl} from './variable'
import {formatDataQuery} from '../utils/index'

axios.defaults.withCredentials = true;

let token = sessionStorage.getItem('token')
  //store.state.token
/*function gettiken() {
  let token=sessionStorage.getItem('_token');
  return token
}*/

export const getData = (url,data) =>{
  //let token=gettiken();
    return new Promise(function(resolve,reject){
        axios.get(baseUrl+url,{params: data,headers: {'Content-Type':'application/json;charset=UTF-8','zcps_token':token}}).then(
          (res)=>{
            console.log('token',token);
            if(res.status===200){
              resolve(res)
            }else{
              reject(res)
            }
          },(err)=>{
            reject(err)
          }
        )
      })
}
export const postData = (url,data)=>{
  return new Promise(function(resolve,reject){
    axios.post(baseUrl+url,data,{headers: {'Content-Type':'application/json;charset=UTF-8','zcps_token':token}}).then(
      (res)=>{
        if(res.status===200){
          resolve(res)
        }else{
          reject(res)
        }
      }
    )
  })
}
export const postDataWithQuery=(url,data)=>{
   return new Promise(function (resolve, reject) {
     axios.post(`${baseUrl}${ url }?${formatDataQuery(data)}`).then(
       (res)=>{
         if(res.status===200){
           resolve(res.data)
         }else{
           reject(res)
         }
       },
       (err)=>{
         console.log('err',err)
         reject(err)
       }
     )
   })
}
export const getListData = (url,query,userId)=>{
  return new Promise(function(resolve,reject){
    let requesturl = baseUrl+`${ url }?query=${ encodeURI(JSON.stringify(query)) }`
    if(userId){
      requesturl = requesturl+`&userId=${userId}`
    }
    axios.get(requesturl).then(
      (res)=>{
        if(res.status===200){
          resolve(res.data)
        }else{
          reject(res)
        }
      },
      (err)=>{
        console.log('err',err)
        reject(err)
      }
    )
  })
}

import React from 'react';
import Api from "./Api";
const add_product = '/add-products'

class Apis {
   AddProduct(fdata){
      return new Promise((resolve, reject)=>{
         Api.post(add_product, fdata).then((res)=>{
            resolve(res); 
         }).catch((err)=>{
            reject(err); 
         })
      });
   }
}
export default new Apis;
import React from 'react';
import Api from "./Api";


class Apis extends React.Component {


   async Add_Product(fdata){
    return Api.post(`/add-products`, fdata);
   }

}
export default Apis;
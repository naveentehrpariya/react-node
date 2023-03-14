import axios from 'axios';
const headers = {
    'Accept' : 'application/json',
    'Access-Control-Allow-Credentials' :true 
}; 

let Api = axios.create({ 
    baseURL : 'http://localhost:5000/',     
    headers : headers 
});     

Api.defaults.withCredentials = true;
export default Api; 


 
 
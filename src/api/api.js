import axios from 'axios';
const headers = {
    'Accept' : 'application/json',
    'Access-Control-Allow-Credentials' :true
}; 

let Api = axios.create({ 
    baseURL : 'https://nodemongo.cyclic.app',     
    headers : headers 
});     

Api.defaults.withCredentials = true;
export default Api; 


 
 
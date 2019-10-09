import axios from 'axios';

// Configuration Axios 
const configAxios = (/* reponseToken */) => {

    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
    axios.defaults.headers.post["Content-Type"] = "application/json";

    // Token configuration 
    // axios.defaults.headers.common["Authorization"] = `Bearer ${reponseToken}`;
}
export default configAxios;     
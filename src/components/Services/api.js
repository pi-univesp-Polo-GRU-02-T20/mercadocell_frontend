import axios from 'axios';

const api = axios.create({
    baseURL: "https://mercadocell-api-teste.herokuapp.com:443",
    headers:{
        "Access-Control-Allow-Origin": '*',
    }
});

export default api;



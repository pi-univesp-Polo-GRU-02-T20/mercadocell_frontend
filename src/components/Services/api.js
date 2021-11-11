import axios from 'axios';

const api = axios.create({
    baseURL: "https://mercadocell-api.herokuapp.com:443",
});

export default api;
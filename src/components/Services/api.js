import axios from 'axios';

const api = axios.create({
    baseURL: "https://mercadocell-api.herokuapp.com",
});

export default api;



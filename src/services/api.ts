import axios from 'axios';

const api = axios.create({
    baseURL:"https://api-project-iot.herokuapp.com"
});

export default api;
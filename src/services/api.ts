import axios from 'axios';

const api = axios.create({
    baseURL:"http://api-project-iot.herokuapp.com"
});

export default api;
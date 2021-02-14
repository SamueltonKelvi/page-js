import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://60296e9a289eb50017cf7ae1.mockapi.io/login',
    timeout: 1000,
    headers: {
        'Content-type':'application/json'
    }
});

export default Axios;
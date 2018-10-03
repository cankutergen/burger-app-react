import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b63ae.firebaseio.com/'
});

export default instance;
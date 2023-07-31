import axios from 'axios';

const addLogin = (user) => axios.post('http://localhost:8080/user/add',user);

export{addLogin}
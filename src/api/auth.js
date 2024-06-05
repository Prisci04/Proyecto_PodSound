import axios from 'axios';

//url de la api
const API = 'http://localhost:3000/api'


//esta funcion toma como objeto el user como argumento y realiza una peticion post a la url
export const registerRequest = user => axios.post(`${API}/register`, user);



//esta funcion toma como objeto el user como argumento y realiza una peticion post a la url
export const loginRequest = user => axios.post(`${API}/login`, user);



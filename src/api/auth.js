import axios from 'axios';

//url de la api
const API = 'https://us-central1-podsound-fb86e.cloudfunctions.net/api_backend_podsound/api'


//esta funcion toma como objeto el user como argumento y realiza una peticion post a la url
export const registerRequest = user => axios.post(`${API}/register`, user);



//esta funcion toma como objeto el user como argumento y realiza una peticion post a la url
export const loginRequest = user => axios.post(`${API}/login`, user);



import axios from './axios'



//la funcion toma un argumento USER y realiza una solicitud POST usando axios
export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = ( ) => axios.get('/verify');

export const updateUserRequest = (id, user) => axios.put(`/perfil/${id}`, user);

export const getUserRequest = (id) => axios.get(`/perfil/${id}`);







import axios from 'axios';

//url de la api
const API = 'http://localhost:3000/api'

export const crearPodcast = podcast => axios.post(`${API}/createPodcast`, podcast);
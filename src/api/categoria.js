import axios from "axios";

const API = 'http://localhost:3000/api'

export const getCategorias = () => axios.get(`${API}/categorias`);
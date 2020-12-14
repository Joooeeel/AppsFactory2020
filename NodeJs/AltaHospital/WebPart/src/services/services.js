import axios from 'axios';

const base_url = 'http://localhost:3006';

export const getPacients = () => axios.get(`${base_url}/users/`);

export const createPacients = (username, alta) => axios.post(`${base_url}/users/`, { username, alta })

export const deletePacients = (id) => axios.delete(`${base_url}/users/${id}`)

export const updatePacients = (id, username) => axios.put(`${base_url}/users/${id}`, { username })

export const getByIDPacients = (id) => axios.get(`${base_url}/users/${id}`)
import axios from 'axios';

export const takeCharacter = (page = 0) => axios.get(`https://swapi.dev/api/people/${page != 0 ? `?page=${page}` : ``}`);

export const takeCharacter2 = (id) => axios.get(`https://swapi.dev/api/people/${id}/`);

export const getFilm = (id) => axios.get(`https://swapi.dev/api/films/${id}`);
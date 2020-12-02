import { useEffect, useState } from 'react';
import axios from 'axios';

export const getCategories = () => axios.get('https://api.chucknorris.io/jokes/categories')


export const getJokeFromCategory = (categories) => axios.get(`https://api.chucknorris.io/jokes/random?category=${categories}`)


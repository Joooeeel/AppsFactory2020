import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCategories, getJokeFromCategory } from './services/services';


export default () => {

    const [categories, setCategories] = useState([]);
    const [joke, setJoke] = useState('');

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data);

            })
    }, []);

    const getJoke = (categoria) => {
        getJokeFromCategory(categoria)
            .then((res2) => {
                setJoke(res2.data.value);
            })

    }

    return (
        <div>
            <ul>
                {
                    categories.map((obj, i) =>
                        <li key={i}><a href='#' onClick={() => getJoke(obj)}>{obj}</a></li>
                    )
                }
            </ul>
            <p>{joke}</p>
        </div>
    );
};
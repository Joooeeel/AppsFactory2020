import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { takeCharacter2, getFilm } from '../../services/services';
import { Container, Img, Films } from './charStyle';
import { Link } from 'react-router-dom';

export default () => {

    const { character } = useParams();
    const [char, setChar] = useState([]);
    const [charFilms, setFilms] = useState([]);

    useEffect(() => {
        takeCharacter2(character)
            .then((res) => {
                const { films } = res.data;
                setChar(res.data);

                return Promise.all(films.map(f => getFilm(getId(f))));
            })
            .then(films => {
                console.log(films);
                setFilms(films.map(({ data }) => data));
            });
    }, []);

    console.log(charFilms);

    const getId = (charArray) => {
        const subnum = charArray.substring(0, charArray.lastIndexOf('/'));

        const ids = subnum.substring(subnum.lastIndexOf('/') + 1, subnum.length);

        return parseInt(ids);

    }

    return (
        <Container>
            <div>
                <h1>{char.name}</h1>
                <p>Height: {char.height}</p>
                <p>Gender: {char.gender}</p>
                <p>Hair Color: {char.hair_color}</p>
                <p>Skin: {char.skin_color}</p>

                <Films>
                    <h2>Films:</h2>
                    <ul>
                        {
                            charFilms.map((film, i) =>
                                <li key={i}>{film.title}</li>
                            )
                        }
                    </ul>
                </Films>

                <Link to={'/'}>
                    <p>BACK TO HOME</p>
                </Link>
            </div>
            <div><Img src={`https://starwars-visualguide.com/assets/img/characters/${character}.jpg`} /></div>
        </Container >
    );
};
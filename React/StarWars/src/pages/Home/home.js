import { useState, useEffect } from 'react';
import { takeCharacter } from '../../services/services';
import { List, Container, LinkPage } from './style';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default () => {

    const [characters, setCharacters] = useState([]);

    const [totalCharacters, setTotal] = useState(0);
    const charxpage = 10;
    let initpage = 1;

    const { id } = useParams();

    useEffect(() => {
        takeCharacter(id)
            .then((res) => {
                console.log(res);
                setTotal(res.data.count);
                setCharacters(res.data.results);
            })
    }, [id]);


    const getId = (charArray) => {
        const subnum = charArray.url.substring(0, charArray.url.lastIndexOf('/'));

        const ids = subnum.substring(subnum.lastIndexOf('/') + 1, subnum.length);

        return parseInt(ids);

    }

    const getPagination = () => {
        const pages = totalCharacters / charxpage;
        const links = [];

        for (let i = 0; i < pages; i++) {
            links.push(initpage + i);
        }

        return links;

    }

    return (
        <Container>
            <List>
                <ul>
                    {
                        characters.map((obj, i) =>
                            <li key={i}>
                                <Link to={`/char/${getId(obj)}`}>
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${getId(obj)}.jpg`} />
                                    <p>{obj.name}</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </List>

            <div>
                {
                    getPagination().map(obj =>
                        <LinkPage to={`/${obj}`}>
                            {obj}
                        </LinkPage>
                    )
                }
            </div>
        </Container>
    );
};
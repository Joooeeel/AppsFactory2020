import { Link } from 'react-router-dom';

export default () =>
    <ul>
        <li><Link to={`/`}>Inicio</Link></li>
        <li><Link to={`/aboutus`}>About us</Link></li>
        <li><Link to={`/aboutus/SoyElParametro`}>About us con parametro</Link></li>
        <li><Link to={`/ajksdfkjhasdk`}>Error en la url</Link></li>
    </ul>;
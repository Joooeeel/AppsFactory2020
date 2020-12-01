import { useParams } from 'react-router-dom';

export default () => {

    const { param } = useParams();

    return <div>Soy el aboutus con parametro: {param}</div>
};
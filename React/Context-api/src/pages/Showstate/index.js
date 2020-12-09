import { useContext } from 'react';
import { AppContext } from '../../application/provider';

export default () => {
    const [state, setState] = useContext(AppContext);
    return (<p>{state.name}</p>);
}
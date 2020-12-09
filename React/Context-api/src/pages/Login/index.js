import { useContext } from 'react';
import { AppContext } from '../../application/provider';

export default () => {
    const [state, setState] = useContext(AppContext);

    return (<input type="text"
        onChange={(e) => { setState({ name: e.target.value }) }} />
    );
}
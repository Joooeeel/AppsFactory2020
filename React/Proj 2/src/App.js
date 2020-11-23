import { Box } from './styled-components/styles'
import { useState } from 'react';

export default () => {

    const [color, setColor] = useState('false');

    return (
        <div>
            <button onClick={() => setColor(!color)}>Cambiar de color</button>
            <Box color={color} />
        </div>
    );
};
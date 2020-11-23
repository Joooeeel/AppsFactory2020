import React, { useState } from 'react';

const integrar = ({ onSomeEvent }) => {

    const input_style = { backgroundColor: 'purple' };
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    return (
        <div style={input_style}>
            <input type="text" placeholder='primer numero a sumar....' onChange={e => setNum1(e.target.value)} />
            <input type="text" placeholder='segundo numero a sumar....' onChange={e => setNum2(e.target.value)} />
            <button onClick={() => onSomeEvent((parseInt(num1) + parseInt(num2)))}>Calcular</button>
        </div>

    );
};

export default integrar;
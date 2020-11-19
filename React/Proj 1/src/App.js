import React, { useRef } from 'react';

const App = _ => {

    const pepito = useRef(null);
    const gradius = useRef(null);
    const ancho = useRef(null);
    const altura = useRef(null);

    const procesar = () => {
        const num = parseInt(pepito.current.value, 10);
        alert(num * 2);
    };

    const gradtofar = () => {
        const num = parseInt(gradius.current.value, 10);
        const far = num * (9 / 5) + 32;
        alert("Tu converso da: " + far);
    };

    const s_rect = () => {
        const width = parseInt(ancho.current.value, 10);
        const height = parseInt(altura.current.value);

        const sup = width * height;

        alert("Superficie " + sup);
    };

    return (
    <div>
        <h1>EUROS TO DOLLAR</h1>
        <input type="text" ref={pepito} />
        <button onClick={procesar}>Procesar</button>
        <h1>CENTIGRADOS A FARENHEIT</h1>
        <input type="text" ref={gradius} />
        <button onClick={gradtofar}>Procesar</button>
        <h1>Superficie cuadrado</h1>
        <input type="text" ref={ancho} />
        <input type="text" ref={altura} />
        <button onClick={s_rect}>Procesar</button>
    </div>
    );
};

export default App;

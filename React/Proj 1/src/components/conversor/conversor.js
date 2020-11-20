import React, {useState} from 'react';

const conv = _ =>{

    const [centigrads, setCentigrads] = useState('');
    const [far, setFar] = useState('');
    
    const centToFar = () =>{
        const farenheid = centigrads * (9/5) + 32;
        setFar(farenheid);
    }
    
    return(
        <div>
            <h1>CENTIGRADS TO FARENHEIT</h1>
            <input type="text" placeholder='Grados centigrados.....' onChange={e => setCentigrads(e.target.value)}/>
            <button onClick={centToFar}>Procesar</button>
            <input type='text' placeholder='Grados Farenheit......' value={far}></input>
            <br/>
            <span>{far}</span>
        </div>
    );
};

export default conv;
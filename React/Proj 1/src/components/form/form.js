import React, {useState} from 'react';

const conversor = _ =>{

    const [eur, setInputEur] = useState('');
    const [doll, setDolar] = useState(0);
    
    const eurValor = e =>{
        setInputEur(e.target.value);
    }

    const eurTodoll = () =>{
        setDolar(eur * 2);
    } 

    return(
        <div>
            <h1>EUROS TO DOLLAR</h1>
            <input type="text" placeholder='Euros.....' onChange={eurValor}/>
            <button onClick={eurTodoll}>Procesar</button>
            <input type='text' placeholder='Dollares....' value={doll}></input>
            <br/>
            <span>{doll}</span>
        </div>
    );
};

export default conversor;
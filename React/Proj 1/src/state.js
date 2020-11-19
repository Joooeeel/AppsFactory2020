import React, {useState} from 'react';


const App = () =>{
   
    const [eur, setInputEur] = useState('');
    const [doll, setDolar] = useState(0);
    
    const eurValor = e =>{
        setInputEur(e.target.value);
    }

    const eurTodoll = () =>{
        setDolar(eur * 2);
    }

    const [centigrads, setCentigrads] = useState('');
    const [far, setFar] = useState('');
    
    const centToFar = () =>{
        const farenheid = centigrads * (9/5) + 32;
        setFar(farenheid);
    }

    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [sup, setSup] = useState('');

    const calculateSuperficie = () =>{
        const superficie = width * height;
        setSup(superficie);
    }
    return(
        //<span onClick={() => actualizarContador(contador + 1)} >{contador}</span>
        <div>
        <h1>EUROS TO DOLLAR</h1>
        <input type="text" placeholder='Euros.....' onChange={eurValor}/>
        <button onClick={eurTodoll}>Procesar</button>
        <br/>
        <span>{doll}</span>
        <h1>CENTIGRADS TO FARENHEIT</h1>
        <input type="text" placeholder='Grados centigrados.....' onChange={e => setCentigrads(e.target.value)}/>
        <button onClick={centToFar}>Procesar</button>
        <br/>
        <span>{far}</span>
        <h1>Calculate superfice of rectangle</h1>
        <input type="text" placeholder='Ancho....' onChange={e => setWidth(e.target.value)}/>
        <input type="text" placeholder='Alto.....' onChange={e => setHeight(e.target.value)}/>
        <button onClick={calculateSuperficie}>Processss</button>
        <br/>
        <span>{sup}</span>
        </div>
    );
};

export default App;

/*
const App =_=>{
    const [contador, setContador] = useState(5); 


    const inputHaCambiado = e => setContador(e.target.value);


    return <div>

        <input type="text" onChange={inputHaCambiado}/>
        
        { contador }
    
    </div>
}
*/ 
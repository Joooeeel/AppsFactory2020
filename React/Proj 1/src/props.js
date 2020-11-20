//import React from 'react';
import React, {useState} from 'react';
import Post from './components/Props/ej1';
import EurConv from './components/Props/conv';
import TempConv from './components/Props/temp';
import Superficie from './components/Props/sup'

const App = _ => {
    
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
        <div className="App">
        <Post postTitle="Viaje a la luna" author="Julio Verne">Texto 1</Post>
        <Post postTitle="Viaje a Marte" author="Pablo Mon">Texto 2</Post>
        <h1>EUROS TO DOLLAR</h1>
        <input type="text" placeholder='Euros.....' onChange={eurValor}/>
        <button onClick={eurTodoll}>Procesar</button>
        <EurConv doll={doll}/>
        <h1>CENTIGRADS TO FARENHEIT</h1>
        <input type="text" placeholder='Grados centigrados.....' onChange={e => setCentigrads(e.target.value)}/>
        <button onClick={centToFar}>Procesar</button>
        <TempConv far={far} />
        <h1>Calculate superfice of rectangle</h1>
        <input type="text" placeholder='Ancho....' onChange={e => setWidth(e.target.value)}/>
        <input type="text" placeholder='Alto.....' onChange={e => setHeight(e.target.value)}/>
        <button onClick={calculateSuperficie}>Processss</button>
        <Superficie sup={sup} />
        </div>
    );
};

export default App;
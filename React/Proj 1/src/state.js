import React, {useState} from 'react';
import pablo from './img/descarga.png';


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

    const IMAGES = {
        img1: 'http://via.placeholder.com/100x100',
        img2: 'http://via.placeholder.com/200x200',
        img3: pablo, 
    };

    const [currentImg, setCurrentImg] = useState(IMAGES.img1);

    return(
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
        <h1>Change image with button</h1>
        <button onClick={ () => setCurrentImg(IMAGES.img1)}>Img 1</button>
        <button onClick={ () => setCurrentImg(IMAGES.img2)}>Img 2</button>
        <button onClick={ () => setCurrentImg(IMAGES.img3)}>Img 3</button>
        <br/><br/>
        <img src={currentImg}/>
        </div>
        
    );
};

export default App;

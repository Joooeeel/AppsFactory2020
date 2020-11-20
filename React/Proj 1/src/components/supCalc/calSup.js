import React, {useState} from 'react';

const calculate_Superfice = _ =>{
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [sup, setSup] = useState('');

    const calculateSuperficie = () =>{
        const superficie = width * height;
        setSup(superficie);
    }

    return(
        <div>
            <h1>Calculate superfice of rectangle</h1>
            <input type="text" placeholder='Ancho....' onChange={e => setWidth(e.target.value)}/>
            <input type="text" placeholder='Alto.....' onChange={e => setHeight(e.target.value)}/>
            <button onClick={calculateSuperficie}>Processss</button>
            <input type="text" placeholder='Superficie....' value={sup}/>
            <br/>
            <span>{sup}</span>
        </div>
    );
};

export default calculate_Superfice;
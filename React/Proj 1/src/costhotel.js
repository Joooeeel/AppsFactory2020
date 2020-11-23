import React, {useState} from 'react';
import CosteHotel from './components/costHotel/costeHotel'
import CostRent from './components/costHotel/costRent'

const App = _ =>{

    const [night, setNight] = useState(0);

    return(
        <div>
            <h1>Calcular coste de hotel</h1>
            <input type="text" placeholder="entra las noches........." onChange={e => setNight(e.target.value)}/>
            <br/>
            <CosteHotel nights={night}/>
            <CostRent nights={night}/>
        </div>
    );
};

export default App;
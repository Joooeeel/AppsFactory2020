import React from 'react';
import Conversor from './components/form/form';
import Conv from './components/conversor/conversor';
import CalSup from './components/supCalc/calSup';

const App = _ =>{
    
    return(
        <div>
            <Conversor />
            <Conv />
            <CalSup />
        </div>
    );
};

export default App;
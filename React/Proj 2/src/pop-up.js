import { useState } from 'react';
import PopUp from './components/pop-up/Pops';

export default () => {

    const [isVisible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(true)}>Show PopUp</button>
            <PopUp isVisible={isVisible} setVisible={setVisible} />
        </div>
    );
};
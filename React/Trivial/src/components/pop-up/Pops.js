import { Pops } from './stylepops';

const popsi = ({ isVisible, setVisible, onClose }) => {

    const changeState = _ => {
        setVisible(false);
        onClose(0);
    }

    return (
        <Pops isVisible={isVisible}>
            <div>
                <h1>HAS GANADO!</h1>
                <button onClick={changeState}> Volver a empezar</button>
            </div>
        </Pops>

    );
};

export default popsi;
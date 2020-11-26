import { Pops } from './stylepops';

const popsi = ({ isVisible, setVisible }) => {

    return (
        <Pops isVisible={isVisible}>
            <div>
                <h1>HAS GANADO!</h1>
                <button onClick={() => setVisible(false)}> Volver a empezar</button>
            </div>
        </Pops>

    );
};

export default popsi;
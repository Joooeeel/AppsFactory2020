import { Pops } from './stylepops';

const popsi = ({ isVisible, setVisible }) => {

    return (
        <Pops isVisible={isVisible}>
            <div>
                <h1>POP UP CON REACT BRO</h1>
                <button onClick={() => setVisible(false)}> Close PopUps</button>
            </div>
        </Pops>

    );
};

export default popsi;
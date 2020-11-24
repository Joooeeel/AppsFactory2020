import { Pops } from './stylepops';

const popsi = ({ isVisible, setVisible }) => {

    return (
        <Pops isVisible={isVisible}>
            <div>
                <h1>POP UP CON REACT</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/d7Mw5w-7bdw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button onClick={() => setVisible(false)}> Close PopUps</button>
            </div>
        </Pops>

    );
};

export default popsi;
import { useState, useEffect } from 'react';
import { getPacients, createPacients, deletePacients, updatePacients, getByIDPacients } from './services/services';

export default () => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [paciente, setPaciente] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        getPacients()
            .then((res) => {
                setUsers(res.data);
            })
    }, [])

    const createP = () => {
        console.log(date);
        createPacients(name, date).then(res => getPacients());
    }

    const deleteP = () => {
        deletePacients(id).then(res => getPacients());
    }

    const updateP = () => {
        updatePacients(id, name).then(res => getPacients());
    }

    const getByID = () => {
        getByIDPacients(id).then(res => setPaciente(res.data));
    }

    return (
        <div>
            <div>
                <input type='number' placeholder="id..." onChange={e => setId(e.target.value)} />
                <input type='text' placeholder="name..." onChange={e => setName(e.target.value)} />
                <input type="date" onChange={e => setDate(e.target.value)} />
            </div>
            <div>
                <button onClick={createP}>Alta</button>
                <button onClick={updateP}>Modificación</button>
                <button onClick={deleteP}>Baja</button>
                <button onClick={getByID}>Consluta por Id</button>
                <button>Consulta todos</button>
            </div>
            <ul>
                {
                    users.map((paciente, i) => <li key={i}>{paciente.id} - {paciente.username} - {paciente.alta}</li>)
                }
            </ul>

            {
                paciente && (<div>
                    <h2>Paciente seleccioando:</h2>
                    <p>id: {paciente.id}</p>
                    <p>Pacienet : {paciente.username}</p>
                </div>)
            }
        </div >
    );
};
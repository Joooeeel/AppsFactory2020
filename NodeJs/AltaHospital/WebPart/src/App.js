export default () => {

    return (
        <div>
            <div>
                <input type='text' placeholder="id..." pattern='[0-9]*' />
                <input type='text' placeholder="name..." />
                <input type="date" />
            </div>
            <div>
                <button>Alta</button>
                <button>Modificación</button>
                <button>Baja</button>
                <button>Consluta por Id</button>
                <button>Consulta todos</button>
            </div>
        </div>
    );
};
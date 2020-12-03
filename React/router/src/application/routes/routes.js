import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home/home';
import AboutUS from '../../pages/Aboutus/aboutus';


export default () => (
    <BrowserRouter>
        <Switch>
            { /*Si no usamos el atributo exact bastaría con que el principio de la url coincidiese con alguno de los valores del atributo path para que el componente fuese renderizado. Por tanto, si no usásemos el atributo exact y en la url tuviesemos /contacto, se renderizarían los componentes Home y Contacto simultaneamente */}
            <Route exact path="/" component={Home} />
            <Route path="/aboutus/:param" component={AboutUS} />
            { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la 
            ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
            <Route path="*" component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);
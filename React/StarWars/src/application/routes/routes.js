import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/home';
import CharacterPage from '../../pages/Characters/char';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/:id' component={Home} />

            <Route path='/char/:character' component={CharacterPage} />

            <Route path="*" component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);
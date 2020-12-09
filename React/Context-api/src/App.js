import Provider from './application/provider';
import ShowState from './pages/showstate';
import LogIn from './pages/login';

export default () => (
    <Provider>
        <LogIn />
        <ShowState />
    </Provider>
);
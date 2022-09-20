import './assets/styles/app.scss';
import { Header } from './components/header/header';
import { Calc } from './pages/calc/calc';

export const App = () => (
    <main>
        <Header />
        <Calc initNumber={0} />
    </main>
);

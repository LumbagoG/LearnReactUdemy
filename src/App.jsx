import './assets/styles/app.scss';
import { Header } from './components/header/header';
import { IncrDecr } from './components/incrDecr/incrDecr';
import { Calc } from './components/calc/calc';

export const App = () => (
    <main>
        <Header />
        <IncrDecr defaultValue={0} />
        <Calc />
    </main>
);

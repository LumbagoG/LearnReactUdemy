import './assets/styles/app.scss';
import { Header } from './components/header/header';
import { IncrDecr } from './components/incrDecr/incrDecr';

export const App = () => (
    <main>
        <Header />
        <IncrDecr initNumber={0} />
    </main>
);

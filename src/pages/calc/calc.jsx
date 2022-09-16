import './calc.scss';
import { useEffect, useRef, useState } from 'react';

export const Calc = () => {
    const refInpValue = useRef(null);
    const [inpEnter, setInpEnter] = useState('');
    const [calcResult, setCalcResult] = useState(0);
    const [inpEnterPress, setInpEnterPress] = useState(false);

    const handleChangeInpEnter = (e) => {
        const { target } = e;
        setInpEnter(target.value);
    };

    const handleKeyDownInp = (e) => {
        const { key } = e;
        switch (key) {
            case 'Enter':
                setTimeout(() => {
                    setInpEnterPress(true);
                }, 1000);
                break;
            case '-':
                console.log(refInpValue.current.value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setCalcResult(inpEnter);
        setInpEnterPress(false);
    }, [inpEnterPress]);

    return (
        <section className='calc'>
            <h2>Калькулятор</h2>

            <label htmlFor='calc-inp-enter'>
                Ввод
                <input
                    className='calc-inp calc-inp-enter'
                    name='calc-inp-enter'
                    type='number'
                    ref={refInpValue}
                    onChange={handleChangeInpEnter}
                    onKeyDown={handleKeyDownInp}
                />
            </label>

            <label htmlFor='calc-inp-output'>
                Вывод
                <input
                    className='calc-inp calc-inp-output'
                    name='calc-inp-output'
                    disabled
                    value={calcResult}
                    type='text'
                />
            </label>
        </section>
    );
};

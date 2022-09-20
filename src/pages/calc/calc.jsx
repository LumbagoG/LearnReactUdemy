import './calc.scss';
import { useRef, useState } from 'react';

export const Calc = ({ ...props }) => {
    const [valueCalc, setValueCalc] = useState({
        value: 0,
    });
    const inputCalc = useRef(null);

    const handleClick = (sign) => {
        switch (sign) {
            case '-':
                console.log('-');
                break;
            case '+':
                console.log('+');
                break;
            default:
                break;
        }
    };

    const handleClickReset = () => {
        setValueCalc((prevState) => ({
            ...prevState,
            value: props.initNumber,
        }));

        console.log(inputCalc.value);
    };

    return (
        <section className='calc'>
            <h2>Калькулятор</h2>

            <div className='calc__wrapper'>
                <button
                    className='increment'
                    type='button'
                    onClick={() => handleClick('+')}
                >
                    +
                </button>
                <button
                    className='decrement'
                    type='button'
                    onClick={() => handleClick('-')}
                >
                    -
                </button>

                <input
                    type='text'
                    placeholder='Введите первое число'
                    ref={inputCalc}
                />
            </div>

            <button
                className='reset'
                type='button'
                onClick={() => handleClickReset()}
            >
                Reset
            </button>
        </section>
    );
};

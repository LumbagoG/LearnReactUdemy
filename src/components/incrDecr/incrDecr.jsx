import './incrDecr.scss';
import { useState } from 'react';

/**
 * Компонент простого калькулятора
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const IncrDecr = ({ ...props }) => {
    const [calcValue, setCalcValue] = useState({
        value: props.initNumber,
    });

    /**
     * Обработчик события клика
     * @param operation
     */
    const handleClickCalc = (operation) => {
        switch (operation) {
            case '+':
                setCalcValue({ ...calcValue, value: calcValue.value + 1 });
                break;
            case '-':
                setCalcValue({ ...calcValue, value: calcValue.value - 1 });
                break;
            case 'reset':
                setCalcValue({ ...calcValue, value: props.initNumber });
                break;
            default:
                console.log('Такой операции не существует');
                break;
        }
    };

    return (
        <section className='calc'>
            <h2>Простой калькулятор</h2>

            <div className='calc__wrapper'>
                <button
                    className='increment'
                    type='button'
                    onClick={() => handleClickCalc('+')}
                >
                    +
                </button>
                <button
                    className='decrement'
                    type='button'
                    onClick={() => handleClickCalc('-')}
                >
                    -
                </button>
                <button
                    className='reset'
                    type='button'
                    onClick={() => handleClickCalc('reset')}
                >
                    Reset
                </button>
                <span className='result'>{calcValue.value}</span>
            </div>
        </section>
    );
};

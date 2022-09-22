import './calc.scss';
import { useEffect, useRef, useState } from 'react';

export const Calc = () => {
    const refInput = useRef(null);
    const [input, setInput] = useState({
        prevValue: null,
        value: '',
        operation: '',
    });

    const handleChangeInput = (e) => {
        setInput({ ...input, value: e.target.value });
    };

    const handleClickBtn = (s) => {
        switch (s) {
            case '+':
                setInput({
                    ...input,
                    prevValue: input.value,
                    value: 0,
                    operation: '+',
                });
                refInput.current.value = '';

                break;
            case 'c':
                setInput({
                    ...input,
                    prevValue: null,
                    value: '',
                    operation: '',
                });
                refInput.current.value = '';
                break;
            default:
                console.log('Такой операции нету');
                break;
        }
    };

    const handleClickBtnResult = () => {
        if (input.prevValue !== null) {
            setInput({
                ...input,
                prevValue: null,
                value:
                    parseInt(input.value, 10) + parseInt(input.prevValue, 10),
                operation: '',
            });
        }
    };

    useEffect(() => {
        console.log(input);
    }, [input]);

    return (
        <section className='calc'>
            <h2>Калькулятор</h2>

            <input
                type='text'
                placeholder='Введите число'
                ref={refInput}
                value={input.value}
                onChange={handleChangeInput}
            />

            <div className='calc__operations'>
                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtn('+')}
                >
                    +
                </button>
                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtn('-')}
                >
                    -
                </button>
                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtn('*')}
                >
                    *
                </button>
                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtn('/')}
                >
                    /
                </button>
                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtnResult()}
                >
                    =
                </button>
                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtn('c')}
                >
                    C
                </button>
            </div>
        </section>
    );
};

import './calc.scss';
import { useRef, useState } from 'react';

export const Calc = () => {
    const refInput = useRef(null);
    const [input, setInput] = useState({
        prevValue: null,
        initValue: null,
        value: 0,
    });

    const handleClickBtn = (action) => {
        switch (action) {
            case '+':
                if (input.prevValue === null) {
                    setInput({ ...input, prevValue: input.value });
                    refInput.current.value = 0;
                }
                break;
            case '=':
                if (input.prevValue !== null) {
                    setInput({
                        ...input,
                        initValue: refInput.current.value,
                    });
                    console.log(input.prevValue, input.initValue);
                    refInput.current.value = input.value;
                }
                break;
            default:
                console.log('Такой команды нету');
                break;
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, value: e.target.value });
    };

    console.log(input.value);

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
                    onClick={() => handleClickBtn('=')}
                >
                    =
                </button>
            </div>
        </section>
    );
};

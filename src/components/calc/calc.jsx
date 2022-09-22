import './calc.scss';
import { useRef, useState } from 'react';

export const Calc = () => {
    const refInput = useRef(null);
    const [input, setInput] = useState({
        prevValue: '',
        value: '',
        operation: '',
    });
    const inputOperations = ['+', '-', '*', '/', 'C'];

    /**
     * Обработчик для записывания введённого значения input
     * @param {React.ChangeEvent<HTMLInputElement>} e - event
     */
    const handleChangeInput = (e) => {
        setInput({ ...input, value: e.target.value });
    };

    /**
     * Подсчет результата
     * @param {*} stateValue - Текущее значение
     * @param {string} stateValuePrev - Предыдущее значение
     * @param {string} operator - Оператор вычисления операции
     * @returns {any}
     */
    const calcResult = (stateValue, stateValuePrev, operator) =>
        // eslint-disable-next-line no-eval
        eval(stateValuePrev + operator + stateValue);

    /**
     * Обработчик для операций
     * @param {string} operation
     */
    const handleClickBtn = (operation) => {
        if (
            operation === '+' ||
            operation === '-' ||
            operation === '*' ||
            operation === '/'
        ) {
            setInput({
                ...input,
                prevValue: input.value,
                value: '',
                operation,
            });
            refInput.current.value = '';
        } else if (operation === 'C') {
            setInput({
                ...input,
                prevValue: null,
                value: '',
                operation: '',
            });
            refInput.current.value = '';
        } else console.log('Такой операции нету');
    };

    /**
     * Обработчик для получения результата
     */
    const handleClickBtnResult = () => {
        if (input.prevValue !== null) {
            setInput({
                ...input,
                prevValue: null,
                value: calcResult(
                    input.value,
                    input.prevValue,
                    input.operation
                ),
                operation: '',
            });
        }
    };

    /**
     * Генерация кнопок с операциями
     * @param {string[]} options - Массив операций
     * @returns {*}
     * @constructor
     */
    const GenerateBtnOperations = (options) =>
        options.map((elem, index) => (
            <button
                className='calc__operations-btn'
                type='button'
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                onClick={() => handleClickBtn(elem)}
            >
                {elem}
            </button>
        ));

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
                {GenerateBtnOperations(inputOperations)}

                <button
                    className='calc__operations-btn'
                    type='button'
                    onClick={() => handleClickBtnResult()}
                >
                    =
                </button>
            </div>
        </section>
    );
};

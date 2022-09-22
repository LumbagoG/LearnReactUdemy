import './incrDecr.scss';
import { useReducer } from 'react';

/**
 * Начальное значение state
 * @param {I & React.ReducerState<(function(*, *): ({value}|*))|*>} initialState - Начальное состояние state
 * @returns {{value}}
 */
const init = (initialState) => ({
    value: initialState,
});

/**
 * Reducer функционала калькулятора
 * @param state - State
 * @param action - Action
 * @returns {{value}|(*&{value: *})|*|(*&{value: number})}
 */
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'incr':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'decr':
            return {
                ...state,
                value: state.value - 1,
            };
        case 'reset':
            return init(action.payload);
        default:
            return state;
    }
};

/**
 * Компонент простого калькулятора
 * @returns {JSX.Element}
 * @constructor
 */
export const IncrDecr = ({ ...props }) => {
    const initState = props.defaultValue; // Дефолтное значение состояния
    const [state, dispatch] = useReducer(inputReducer, initState, init);
    const { value } = state;

    return (
        <section className='calc'>
            <h2>Простой калькулятор</h2>

            <div className='calc__wrapper'>
                <button
                    className='increment'
                    type='button'
                    onClick={() => dispatch({ type: 'incr' })}
                >
                    +
                </button>
                <button
                    className='decrement'
                    type='button'
                    onClick={() => dispatch({ type: 'decr' })}
                >
                    -
                </button>
                <button
                    className='reset'
                    type='button'
                    onClick={() =>
                        dispatch({ type: 'reset', payload: initState })
                    }
                >
                    Reset
                </button>
                <span className='result'>{value}</span>
            </div>
        </section>
    );
};

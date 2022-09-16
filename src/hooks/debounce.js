import { useEffect, useState } from 'react';

/**
 * Кастомный хук для добавления debounce
 * @param value - Значение
 * @param delay - Задержка
 * @returns {unknown} - Возвращает значение после debounce
 */
export const useCustomDebounce = (value, delay) => {
    // Состояния debounce
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        /**
         * Выставление debounce и возврат значения
         * @type {number}
         */
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        // Очищаем эффект
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    // Возвращаем значение после debounce
    return debounceValue;
};

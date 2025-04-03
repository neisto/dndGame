import React, { useState } from 'react';
import classes from '../Card/Card.module.css'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const [timeoutId, setTimeoutId] = useState<any | null>(null);

    const handleClick = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
            setCount(count +1); // Увеличение на 2 при двойном нажатии
        } else {
            const id = setTimeout(() => {
                setCount(count - 1); // Уменьшение на 1 при одном нажатии
                setTimeoutId(null);
            }, 300); // Задержка для определения двойного нажатия
            setTimeoutId(id);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={classes.counter}
        >
            {count}
        </div>
    );
};

export default Counter;
import React, { useState, useRef, useEffect } from 'react';
import classes from './HealthBar.module.css'; 

interface HealthBarProps {
  initialHealth: number;
  current: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ initialHealth }) => {
  const [currentHealth, setCurrentHealth] = useState<number>(initialHealth);
  const clickTimeout = useRef<number | null>(null);

  // Чтение данных из localStorage через useEffect (если потребуется последующая инициализация)
  useEffect(() => {
    JSON.parse(localStorage.getItem('массив') || '[]');
  }, []);

  const handleClick = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      handleDoubleClick();
    } else {
      clickTimeout.current = window.setTimeout(() => {
        handleSingleClick();
        clickTimeout.current = null;
      }, 300);
    }
  };

  const handleSingleClick = () => {
    setCurrentHealth(prev => Math.max(0, prev - 1));
    if (currentHealth < 1) {
      console.log("игрок погиб");
      window.location.reload();
    }
  };

  const handleDoubleClick = () => {
    setCurrentHealth(prev => Math.min(prev + 1, initialHealth));
  };

    return (
        <div className={classes.healthBar} onClick={handleClick}>
            <label htmlFor="bar" className={classes.hBar}>Текущее здоровье: {currentHealth}</label>
            <div id='bar' className={classes.bar} style={{ width: `${(currentHealth / initialHealth) * 100}%` }} />
        </div>
    );
};

export default HealthBar;

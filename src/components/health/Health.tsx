import classes from '../health/health.module.css';
import { useState, useRef } from 'react';
import DiceButton from '../DiceButton/DiceButton';



interface PlayerData {
  health: number;
  def: number;
  healOfClass: number;
}

interface HealthProps {
  indexPlayer: number;
}

export default function Health({ indexPlayer }: HealthProps): React.ReactElement {
  const localStorageData = JSON.parse(localStorage.getItem('массив') || '[]') as PlayerData[];
  const indexPlayerData = localStorageData[indexPlayer] || { health: 0, def: 0, healOfClass: 0 };
  
  const [cardHealth, setCardHealth] = useState<number>(indexPlayerData.health);
  const inpHealth = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>(indexPlayerData.def.toString());
  const [curHealthOfClass, _setCurHealthOfClass] = useState<number>(indexPlayerData.healOfClass);
  
  // Внести здоровье вручную
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const inputValue = inpHealth.current?.value;
      if (inputValue) {
        const personalValue: number = parseInt(inputValue, 10);
        if (!isNaN(personalValue)) {
          setCardHealth(personalValue);

          const tstCrd = JSON.parse(localStorage.getItem('массив') || '[]') as PlayerData[];
          tstCrd[indexPlayer].health = personalValue;
          localStorage.setItem('массив', JSON.stringify(tstCrd));
        }
      }
    }
  };

  // Функция генерации количества ХП (приходит наибольшая характеристика, добавляется кубик D6)
  function InitHealth(): void {
    const rand: number = Math.floor(Math.random() * 6) + 1;
    const finalHealth = curHealthOfClass + rand;

    const tstCrd = JSON.parse(localStorage.getItem('массив') || '[]') as PlayerData[];
    tstCrd[indexPlayer].health = finalHealth;
    localStorage.setItem('массив', JSON.stringify(tstCrd));

    setCardHealth(finalHealth);
    window.location.reload();

  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleKeyPressDef = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const tstCrd = JSON.parse(localStorage.getItem('массив') || '[]') as PlayerData[];
      tstCrd[indexPlayer].def = parseInt(inputValue, 10) || 0;
      localStorage.setItem('массив', JSON.stringify(tstCrd));
    }
  };

  return (
    <div>
      <div className={classes.shield}>
        <input
          id="sketchyInput"
          className={`${classes.rock} ${classes.shieldValue}`}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPressDef}
          placeholder={inputValue}
        />
      </div>
      
      <ul className={classes.health_ul} style={{ zIndex: '500' }}>
        <li className={classes.healthRandomButton} onClick={InitHealth}>
          <DiceButton />
        </li>
        <li>
          <input
            ref={inpHealth}
            className={classes.healthInput}
            type="text"
            onKeyPress={handleKeyPress}
          />
        </li>
        <li>
          <div className={classes.heart}>
            <p className={classes.txt_health}>{cardHealth}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
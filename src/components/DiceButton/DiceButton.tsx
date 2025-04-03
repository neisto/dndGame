import React, { useState, useEffect, useRef } from 'react'
import styles from './DiceButton.module.css'


// Обновлённый массив, исключающий кубики 2 и 3
// Теперь вместо набора из 6 кубиков используем массив с 4 элементами,
// где каждому элементу явно указано имя класса и количество точек на нём.
const DICE_DATA = [
  { className: 'dice_one', points: 1 },
  { className: 'dice_four', points: 4 },
  { className: 'dice_five', points: 5 },
  { className: 'dice_six', points: 6 }
]

interface DiceButtonProps {
  // Можно расширять пропсы, если понадобится
}

const DiceButton: React.FC<DiceButtonProps> = () => {
  const [diceIndex, setDiceIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      // Каждые 200 мс переключаем вид кубика
      intervalRef.current = window.setInterval(() => {
        setDiceIndex(prev => (prev + 1) % DICE_DATA.length)
      }, 200)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
    // Очистка таймера при демонтаже или изменении состояния
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  const { className, points } = DICE_DATA[diceIndex]
  

  return (
    <button
      className={`${styles.dice} ${styles['dice-button']} ${styles[className]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Array.from({ length: points }, (_, i) => (
        <li key={i} className={styles.dice__point}></li>
      ))}
    </button>
  )
}

export default DiceButton
import classes from '../Characteristics/Characteristic.module.css'
import { useState, useRef } from 'react';
import RandomChar from '../RandomCharacteristic'
import DiceButton from '../DiceButton/DiceButton';
import allData from '../info/allData';

interface CharProps {
    characteristicName: string,
    indexPlayer: number,
    isRace: string,
}


export default function Characteristics({characteristicName, indexPlayer, isRace}: CharProps): React.ReactElement<any, any> {
    const inpChar = useRef<HTMLInputElement>(null);
    const [charValue, setCharValue] = useState<any>(JSON.parse(localStorage.getItem('массив') || '[]')[indexPlayer][characteristicName]);
    const [charModifyValue, setCharModifyValue] = useState<any>(Math.floor((charValue-10)/2)+bonusModifyByRacetoDisplay());
    const [popUpInput, setPopUpInput] = useState(false)
    const [popUpRandomButton, setPopUpRandomButton] = useState(false)


    
    
    
    //отправка в локал сторадж модификаторов
    function toStorageModify():void {
        const data = JSON.parse(localStorage.getItem('массив') || '[]');
        characteristicName === "Streng" ? data[indexPlayer].Smod = charModifyValue : false
        characteristicName === "Agility" ? data[indexPlayer].Amod = charModifyValue : false
        characteristicName === "Intelligence" ? data[indexPlayer].Imod = charModifyValue : false
        characteristicName === "Charism" ? data[indexPlayer].Cmod = charModifyValue : false
        localStorage.setItem('массив', JSON.stringify(data))
    }

    toStorageModify()

    //рандомизировать характеристики 
    const handleButtonClick = () => {
        const currentChar = RandomChar();
        const data = JSON.parse(localStorage.getItem('массив') || '[]');

        setCharValue(currentChar[0].toString());
        
        //отрисовка Характеристики
        characteristicName === "Streng" ? data[indexPlayer].Streng = currentChar[0].toString() : false
        characteristicName === "Agility" ? data[indexPlayer].Agility = currentChar[0].toString() : false
        characteristicName === "Intelligence" ? data[indexPlayer].Intelligence = currentChar[0].toString() : false
        characteristicName === "Charism" ? data[indexPlayer].Charism = currentChar[0].toString() : false

        //отрисовка модификатора Характеристики, с учетом бонусов класса (если они есть)
        characteristicName === "Streng" ? setCharModifyValue(currentChar[1] + bonusModifyByRace()[0]) : false
        characteristicName === "Agility" ? setCharModifyValue(currentChar[1] + bonusModifyByRace()[1]) : false
        characteristicName === "Intelligence" ? setCharModifyValue(currentChar[1] + bonusModifyByRace()[2]) : false
        characteristicName === "Charism" ? setCharModifyValue(currentChar[1] + bonusModifyByRace()[3]) : false
        localStorage.setItem('массив', JSON.stringify(data))
        window.location.reload();

    }

    //функция подсчета модификатора, в зависимости от рассы (вернет сила, ловкость, интеллект, харизму) в этой последовательности
    function bonusModifyByRace(): number[] {
    
        const userRace = allData()
        const arrS: number[] = [0]
        const arrA: number[] = [0]
        const arrI: number[] = [0]
        const arrC: number[] = [0]
    
        if (isRace[2] === "Мужчина") {
    
            userRace.map(user =>( user.race === isRace[0] && user.strong ? arrS.push(user.strong) : false));
    
        }
    
        else if (isRace[2] === "Женщина") {
            userRace.map(user =>( user.racew === isRace[1] && user.strong ? arrS.push(user.strong) : false));
    
        }
    
        if (isRace[2] === "Мужчина") {
    
            userRace.map(user =>( user.race === isRace[0] && user.agil ? arrA.push(user.agil) : false));
    
        }
    
        else if (isRace[2] === "Женщина") {
            userRace.map(user =>( user.racew === isRace[1] && user.agil ? arrA.push(user.agil) : false));
    
        }
    
        if (isRace[2] === "Мужчина") {
    
            userRace.map(user =>( user.race === isRace[0] && user.int ? arrI.push(user.int) : false));
    
        }
    
        else if (isRace[2] === "Женщина") {
            userRace.map(user =>( user.racew === isRace[1] && user.int ? arrI.push(user.int) : false));
    
        }
    
        if (isRace[2] === "Мужчина") {
    
            userRace.map(user =>( user.race === isRace[0] && user.charism ? arrC.push(user.charism) : false));
    
        }
    
        else if (isRace[2] === "Женщина") {
            userRace.map(user =>( user.racew === isRace[1] && user.charism ? arrC.push(user.charism) : false));
    
        }
        return [arrS[arrS.length-1], arrA[arrA.length-1], arrI[arrI.length-1], arrC[arrC.length-1]]
    }

    //функция отрисовки модификатора 
    function bonusModifyByRacetoDisplay():number {
        let modiNum: number = 0

        if (characteristicName === "Streng") {
            modiNum = bonusModifyByRace()[0];
        } else if (characteristicName === "Agility") {
            modiNum = bonusModifyByRace()[1];
        } else if (characteristicName === "Intelligence") {
            modiNum = bonusModifyByRace()[2];
        } else if (characteristicName === "Charism") {
            modiNum = bonusModifyByRace()[3];
        }

        return modiNum 
    
    }
    

    //внести характеристики вручную
    const handleKeyPress = (event: any): void => {
        // Получаем значение из инпута

    if (event.key === 'Enter') {
        const inputValue: any = inpChar.current?.value;
        setCharValue(inputValue);
        setCharModifyValue(Math.floor((inputValue-10)/2)+bonusModifyByRacetoDisplay());
                    const data = JSON.parse(localStorage.getItem('массив') || '[]');


        characteristicName === "Agility" ? data[indexPlayer].Agility = inputValue : false
        characteristicName === "Streng" ? data[indexPlayer].Streng = inputValue : false
        characteristicName === "Intelligence" ? data[indexPlayer].Intelligence = inputValue : false
        characteristicName === "Charism" ? data[indexPlayer].Charism = inputValue : false

        localStorage.setItem('массив', JSON.stringify(data))
        window.location.reload();

    }
}
    function handleMouseEnter():void {
        setPopUpInput(true)
    }

    function handleMouseLeave():void {
        setPopUpInput(false)

    }

    function handleMouseEnter1():void {
        setPopUpRandomButton(true)
    }

    function handleMouseLeave1():void {
        setPopUpRandomButton(false)

    }   

    
    return (
            <ul className={classes.charUl}>
                <div style={{position: 'relative'}}>
                    { popUpRandomButton &&(<div className={classes.popUp}>Выбросить случайное значение на костях</div>)}
                    <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  onClick={handleButtonClick} className={classes.dices_char}><DiceButton ></DiceButton></li>
                </div>

                <div style={{position: 'relative'}}>
                    { popUpInput &&(<div className={classes.popUp}>Введите результат броска кубика</div>)}
                    <li><input onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={inpChar} className={classes.inputChar} style={{color: 'white'}} type="text" onKeyPress={handleKeyPress}/></li>
                </div>

                <li className={`${classes.box} ${classes.characteristicsBox} `}><p>{charValue}</p></li>  

                {characteristicName === "Streng" && (
                <li>
                     <p  className={`${classes.characteristic_name} ${classes.rock}`}>Сил</p>
                </li>
                )}
                                {characteristicName === "Agility" && (
                <li>
                     <p  className={`${classes.characteristic_name} ${classes.rock}`}>Лов</p>
                </li>
                )}
                                {characteristicName === "Intelligence" && (
                <li>
                    <p  className={`${classes.characteristic_name} ${classes.rock}`}>Инт</p>
                </li>
                )}
                                {characteristicName === "Charism" && (
                <li>
                    <p  className={`${classes.characteristic_name} ${classes.rock}`}>Хар</p>
                </li>
                )}
                 <li>
                    <div className={`${classes.box} ${classes.modify}`}><p>{charModifyValue}</p></div>
                </li>
            </ul>
    )
}
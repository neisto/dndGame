import classes from './Card.module.css'
import Characteristics from '../Characteristics/Characteristic.tsx';
import DiceButton from '../DiceButton/DiceButton.tsx';
import UserRaceInit from '../objRace.tsx';
import RandomChar from '../RandomCharacteristic.tsx';
import React, { useState, useRef } from 'react';
import Health from '../health/Health.tsx';
// import html2canvas from 'html2canvas';
import getClass from '../ClassInit.tsx';
import Portait from '../Portait/Portrait.tsx';
import styles from '../Characteristics/Characteristic.module.css'
import Uploader from '../uploaderIMG.tsx';


interface CardType {
    positionWhenInfoOn?: boolean,
    indexPlayer: number,
    numCurrentPlayer: number,
    isRace : string,
}   

export default function Card({indexPlayer, numCurrentPlayer, isRace}: CardType): React.ReactElement<any, any> {
        
    //чтобы получить верный класс, передаю Индекс игрока в функцию генерации класса
    getClass(indexPlayer, isRace)
  
    const selectPlayer: any = useRef<HTMLSelectElement>(null) ;    

    const startRace = [{ state: 1, race: 'Человек', racew: 'Человек', description: 'Человек' }]

    const [currentRace, setCurrentRace] = useState(startRace);
    const [currentRacew, setCurrentRacew] = useState(startRace);
    const [newRace, setNewRace] = useState(JSON.parse(localStorage.getItem('массив') || '[]')[indexPlayer].race);
    const [newRacew, setNewRacew] = useState(JSON.parse(localStorage.getItem('массив') || '[]')[indexPlayer].racew);
    const [currentClass, _setCurrentClass] = useState(JSON.parse(localStorage.getItem('массив') || '[]')[indexPlayer].class);
    const selectChar = useRef<HTMLSelectElement>(null);
    const inpraceChar = useRef<HTMLInputElement>(null);
    const inpraceCharW = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(JSON.parse(localStorage.getItem('массив') || '[]')[indexPlayer].name);
    const arrNumberPlayers: number[] = [0,1,2,3,4]
    const sex = useRef<HTMLOptionElement>(null);
    const [currentSex, setCurrentSex] = useState(JSON.parse(localStorage.getItem('массив') || '[]')[indexPlayer].sex);
    const [popUpInput, setPopUpInput] = useState(false)
    const [popUpRandomButton, setPopUpRandomButton] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [popStatus, setPopStatus] = useState(true)

    

//функция получает случаную рассу путем скидывая 2 кубиков D6 и сложения их результата
function ChangeRace(): void {
    setCurrentRace(UserRaceInit(RandomChar()[2]))
    setCurrentRacew(UserRaceInit(RandomChar()[2]))    
    const data = JSON.parse(localStorage.getItem('массив') || '[]');
        data[indexPlayer].newPortrait = ""
        localStorage.setItem('массив', JSON.stringify(data))
}

//функция получает рассу введенную принудительно
function ChangeRaceInp(): void {
    const inputValuerace: any = inpraceChar.current?.value;
    const inputValueracew: any = inpraceCharW.current?.value;

    setCurrentRace(UserRaceInit(inputValuerace))
    setCurrentRacew(UserRaceInit(inputValueracew)) 
    const data = JSON.parse(localStorage.getItem('массив') || '[]');
    data[indexPlayer].newPortrait = ""
    localStorage.setItem('массив', JSON.stringify(data))

}

//смена рассы в списке
    function handleSelectPlayer(event: React.ChangeEvent<HTMLSelectElement>){   
        const currentPlayerNum = event.target.value   
        const data  = JSON.parse(localStorage.getItem('массив') || '[]');
        const updatedCards = data.map((card: any)  => ({
            ...card,
            current: currentPlayerNum
        }));        
        localStorage.setItem('массив', JSON.stringify(updatedCards))

        
        window.location.reload()
        
    }
    //функция записи рассы в Локал сторадж (работа с селектом  в форме выбора), если мужчина
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        window.location.reload()

        const data = JSON.parse(localStorage.getItem('массив') || '[]');
        data[indexPlayer].race = event.target.value
        
        //отправка выбранной рассы в компонент отрисовки описания

        localStorage.setItem('массив', JSON.stringify(data))
        setNewRace(event.target.value)
    }

    //функция записи рассы в Локал сторадж (работа с селектом  в форме выбора), если женщина
    const handleSelectChangeW = (event: React.ChangeEvent<HTMLSelectElement>) => {
        window.location.reload()

        const data = JSON.parse(localStorage.getItem('массив') || '[]');
        data[indexPlayer].racew = event.target.value
        
        //отправка выбранной рассы в компонент отрисовки описания

        localStorage.setItem('массив', JSON.stringify(data))
        setNewRacew(event.target.value)
    }

    //функция передачи данных о поле персонажа в стэйт
    function handleSelectSex(event:any){
        setCurrentSex(event.target.value)
        const data = JSON.parse(localStorage.getItem('массив') || '[]');
        data[indexPlayer].sex = event.target.value
        localStorage.setItem('массив', JSON.stringify(data))
        // window.location.reload()

    }

    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
                        const data = JSON.parse(localStorage.getItem('массив') || '[]');

            data[indexPlayer].name = inputValue
            // console.log(data);
            
            localStorage.setItem('массив', JSON.stringify(data))

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

    const elementRef = useRef<HTMLDivElement>(null);
    //скрин карточки через библиотеку html2canvas   
    // async function saveScreenshot() {
    //     const cardElement = document.getElementById('carddd'); // Убедитесь, что элемент имеет этот ID
    //     if (cardElement) {
    //         // Преобразуем элемент в canvas с помощью html2canvas
    //         const canvas = await html2canvas(cardElement);
    //         const dataUrl = canvas.toDataURL('image.png');

    //         // Здесь можно задать другое имя файла
    //         const fileName = 'card.png';
            
    //         // Создание ссылки для скачивания
    //         const link = document.createElement('a');
    //         link.href = dataUrl;
    //         link.download = fileName;
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     }
    // }
    function handleMouseEnter3():void {
        setPopUp(true)
    }

    function handleMouseLeave3():void {
        setPopUp(false)
        setPopStatus(false)

    }
    const dataForPortrait = JSON.parse(localStorage.getItem('массив') || '[]')
    return (
        <>
        <div className={`${classes.card} ${classes.levitate}`} ref={elementRef} id='carddd' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <div className={classes.characteristick_block}>
                    <div className={classes.characteristics_block}>
                        <div className={styles.char_strange}>  
                            <Characteristics indexPlayer={indexPlayer} isRace={isRace} characteristicName={'Streng'}></Characteristics>
                        </div>
                        <div className={styles.char_agil}>  
                            <Characteristics indexPlayer={indexPlayer} isRace={isRace} characteristicName={'Agility'}></Characteristics>
                        </div>
                        <div className={styles.char_int}>  
                            <Characteristics indexPlayer={indexPlayer} isRace={isRace}  characteristicName={'Intelligence'}></Characteristics>
                        </div>
                        <div className={styles.char_char}>  
                            <Characteristics indexPlayer={indexPlayer} isRace={isRace}  characteristicName={'Charism'}></Characteristics>
                        </div>
                    </div>
            </div>
            <Health indexPlayer={indexPlayer}></Health>    

            <Uploader indexPlayer={indexPlayer}></Uploader>
            { popUp && popStatus &&(<div className={classes.popUpPort}>Нажмите, чтобы загрузить свой портрет</div>)}
            {dataForPortrait[indexPlayer].newPortrait !== '' && (<Portait newPortrait={dataForPortrait[indexPlayer].newPortrait} newRace={''} sex={''}/>)}
            {dataForPortrait[indexPlayer].newPortrait === '' && currentSex === 'Мужчина' && (<Portait newRace={newRace} sex={currentSex} />)}
            {dataForPortrait[indexPlayer].newPortrait === '' && currentSex === 'Женщина' && (<Portait newRace={newRacew} sex={currentSex} />)}

            <div className={classes.sketchy}>
                <div className={classes.infoFirstBlock}>
                <select onChange={handleSelectPlayer} className={`${classes.informationBlocks} ${classes.name}`}>
                {arrNumberPlayers.map((i, index) =>
                    i !== 0 ? (
                        <option
                        ref={selectPlayer}
                        className={classes.rockOpt}
                        key={index + 1}
                        value={i}
                        >
                        {`Игрок ${i}`}
                        </option>
                    ) :  <option 
                    ref={selectPlayer}
                    className={classes.rockOpt}
                    key={index + 1}
                    value={i}
                    >
                    {`Герой ${numCurrentPlayer}`}
                    </option>
                )}                            
                </select>

                <select onChange={handleSelectSex} className={`${classes.informationBlocks} ${classes.name}`} value={currentSex}>
                        <option
                        ref={sex}
                        className={classes.rockOpt}
                        >
                        Мужчина
                        </option>
                    ) :  <option 
                    ref={sex}
                    className={classes.rockOpt}
                    >
                        Женщина
                    </option>
                </select>
                </div>

                <label className={classes.rock} htmlFor='sketchyInput' style={{fontSize: 15}}>Имя персонажа</label>
                <input
                id='sketchyInput'
                style={{fontSize: 20}}  
                className={`${classes.informationBlocks} ${classes.rock}`}
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={inputValue}
                />
                
                <label className={classes.rock} htmlFor='sketchyClass' style={{fontSize: 15}}>Специализация</label>
                <div className={classes.informationBlocks} id='sketchyClass'><p className={classes.rock1} style={{color: 'white'}}>{currentClass}</p></div>

                <label className={classes.rock} htmlFor='sketchyrace' style={{fontSize: 15}}>Происхождение</label>
                    

                    {currentSex === 'Мужчина' && (
                    <ul className={classes.block_species} id='sketchyrace'>
                        <li><div className={`${classes.species_inp} ${classes.informationBlocks}`}><p className={classes.rock1}>{newRace}</p></div></li>    
                        <li>
                            
                            <select ref={selectChar} onChange={handleSelectChange} className={`${classes.species_select} ${classes.informationBlocks}`}>
                                    <option className={classes.rockOpt} value='Кто вы?'>Кто вы?</option>
                                    {currentRace.map((item, ind) => (<option className={classes.rockOpt} key={ind+11} value={item.race}>{item.race}</option>))}
                                    
                            </select>   

                        </li>
                        <li><input ref={inpraceChar}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onKeyPress={() => ChangeRaceInp()} className={`${classes.species_inp} ${classes.informationBlocks}`} type='text' /></li>
                        { popUpInput && (<div className={`${classes.popUp} ${classes.popUpCharInp}`}>Введите результат броска кубика</div>)}
                        { popUpRandomButton &&(<div className={`${classes.popUp} ${classes.popUpChar}`}>Выбросить случайное значение на костях</div>)}
                        <li className={classes.species_btn} onClick={() => ChangeRace()} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}><DiceButton></DiceButton></li>
                    </ul>)}

                    {currentSex === 'Женщина' && (
                    <ul className={classes.block_species} id='sketchyrace'>
                        <li><div className={`${classes.species_inp} ${classes.informationBlocks}`}><p className={classes.rock1}>{newRacew}</p></div></li>    
                        <li>

                        <select ref={selectChar} onChange={handleSelectChangeW} className={`${classes.species_select} ${classes.informationBlocks}`}>
                                    <option className={classes.rockOpt} value='Кто вы?'>Кто вы?</option>
                                    {currentRacew.map((item, ind) => (<option className={classes.rockOpt} key={ind+21} value={item.racew}>{item.racew}</option>))}                               
                        </select>   

                        </li>
                        <li><input ref={inpraceCharW} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onKeyPress={() => ChangeRaceInp()} className={`${classes.species_inp} ${classes.informationBlocks}`} type='text' /></li>
                        { popUpInput && (<div className={`${classes.popUp} ${classes.popUpCharInp}`}>Введите результат броска кубика</div>)}
                        { popUpRandomButton && (<div className={`${classes.popUp} ${classes.popUpChar}`}>Выбросить случайное значение на костях</div>)}
                        <li className={classes.species_btn} onClick={() => ChangeRace()} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}><DiceButton></DiceButton></li>
                    </ul>)}

            </div>
            

        </div>  

        </>
  
    );
}
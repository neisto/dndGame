import classes from '../AllDoneCards/AllCard.module.css'
import HealthBar from './healthBar'
import { JSX, useState, useEffect } from 'react'
import PortaitMini from '../Portait/PortaitMini'

export default function AllCard(): JSX.Element {
  const [objDoneCards, setObjDoneCards] = useState<any[]>([])
  //состояние подсказки под карточками
  const [pops, setPops] = useState('клик -ХП | двойной клик +ХП')

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('массив') || '[]').splice(0, 4)
    setObjDoneCards(cards)

    //состояние подсказки под карточками исчезнет через:
    setTimeout(() => {
      setPops("")
  }, 8000);
  }, [])

  // Функция для определения класса
  const getClassByItem = (item: any) => {
    if (item.class === 'Воин' || item.class === 'Воительница') {
      return classes.charRoundFinalCardWar
    }
    if (item.class === 'Плут' || item.class === 'Разбойница') {
      return classes.charRoundFinalCardPlut
    }
    if (item.class === 'Чародей' || item.class === 'Чародейка') {
      return classes.charRoundFinalCardChar
    }
    if (item.class === 'Бард' || item.class === 'Бардесса') {
      return classes.charRoundFinalCardBard
    }
    return ''
  }

    return (
        <>
        <ul className={classes.table}>
            {objDoneCards.map((item:any, index:any) => (
                
                <li className={classes.scale} key={index}>
                    <div>
                        <HealthBar current={item.id} initialHealth={item.health} />
                    </div>
                    {item.health === 0 && (<div className={`${classes.finish_cardOff} ${classes[`levitate${index}`]}`}></div>)}
                    {item.health !== 0 && (<div className={`${classes.finish_card} ${classes[`levitate${index}`]}`}>
                    {item.newPortrait !== '' && (<PortaitMini newPortrait={item.newPortrait} newRace={''} sex={''}/>)}
                    {item.newPortrait === '' && item.sex === 'Мужчина' && (<PortaitMini newRace={item.race} sex={item.sex} />)}
                    {item.newPortrait === '' && item.sex === 'Женщина' && (<PortaitMini newRace={item.racew} sex={item.sex} />)}
                        <div className={classes.informationBox}>
                            <p className={classes.informationBlocks}>{item.name}</p>
                            {/* {   item.sex === 'Женщина' && (<p className={classes.informationBlocks}>{item.racew}</p>) }
                            {   item.sex === 'Мужчина' && (<p className={classes.informationBlocks}>{item.race}</p>) } */}
                        </div>

                    {   item.class === 'Воин' &&  (<div className={`${classes.classesImg} ${classes.classesImg1}`}></div>) }
                    {   item.class === 'Воительница' && (<div className={`${classes.classesImg} ${classes.classesImg1}`}></div>) }
                    {   item.class === 'Плут' && (<div className={`${classes.classesImg} ${classes.classesImg2}`}></div>) }
                    {   item.class === 'Разбойница'  && (<div className={`${classes.classesImg} ${classes.classesImg2}`}></div>) }
                    {   item.class === 'Чародей' && (<div className={`${classes.classesImg} ${classes.classesImg3}`}></div>) }
                    {   item.class === 'Чародейка' && (<div className={`${classes.classesImg} ${classes.classesImg3}`}></div>) }
                    {   item.class === 'Бард'&& (<div className={`${classes.classesImg} ${classes.classesImg4}`}></div>) }
                    {   item.class === 'Бардесса'  && (<div className={`${classes.classesImg} ${classes.classesImg4}`}></div>) }

                        <ul>
                        <li key={index+11} className={`${classes.charRoundFinalCard} ${classes.r1} ${getClassByItem(item)}`}>
                                    <div>
                                        <label htmlFor='str' className={classes.labelCharTop}>Сил</label>
                                        <p id='str' className={classes.txtChar}>{item.Streng}</p>
                                    </div>
                            </li>
                            <li key={index+112} className={`${classes.charRoundFinalCard} ${classes.r2} ${getClassByItem(item)}`}>
                                    <div>
                                        <label htmlFor='ag' className={classes.labelCharTop}>Лов</label>
                                        <p id='ag' className={classes.txtChar}>{item.Agility}</p>
                                    </div>
                            </li>
                            <li key={index+113} className={`${classes.charRoundFinalCard} ${classes.r3} ${getClassByItem(item)}`}>
                                    <div>
                                        <label htmlFor='int' className={classes.labelCharDown}>Инт</label>
                                        <p id='int' className={classes.txtChar}>{item.Intelligence}</p>
                                    </div>
                            </li>
                            <li key={index+115} className={`${classes.charRoundFinalCard} ${classes.r4} ${getClassByItem(item)}`}>
                                    <div>
                                        <label htmlFor='ch' className={classes.labelCharDown}>Хар</label>
                                        <p id='ch' className={classes.txtChar}>{item.Charism}</p>
                                    </div>
                            </li>

                            <li className={`${classes.modify} ${classes.m1}`}><div> {item.Smod} </div></li>
                            <li className={`${classes.modify} ${classes.m2}`}><div> {item.Amod} </div></li>
                            <li className={`${classes.modify} ${classes.m3}`}><div> {item.Imod} </div></li>
                            <li className={`${classes.modify} ${classes.m4}`}><div> {item.Cmod} </div></li>
                        </ul> 
                        <p className={classes.pops}>{pops}</p>                   
                    </div>)}
                </li>
            ))}
        </ul>
   
        </>
    )
    
}
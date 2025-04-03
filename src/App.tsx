import { useEffect, useState } from 'react'

import './App.css'
import Card from './components/Card/Card.tsx'
import Panel from './components/Panel/Panel.tsx';
import AllCard from './components/AllDoneCards/AllCard.tsx';
import Button from './components/Button.tsx'
import classes from './components/Card/Card.module.css'
import DefaultCards from './components/DeafultCards.tsx' 
import AnimButton from './components/animButton/animButton.tsx';
import CardInfo from './components/Card/CardInfo.tsx';


function App() {
    // localStorage.clear()
    const dataStart = JSON.parse(localStorage.getItem('массив') || null)
    console.log(dataStart);
    
    dataStart === null ? localStorage.setItem('массив', JSON.stringify(DefaultCards())) : false

    //ЕСЛИ ОШИБКА - РАСКОММЕНТИРОВАТЬ здесь и перезагрузить страницу, ЧТОБЫ ЗАДАТЬ СТАРТОВЫЙ НАБОР, без этого не запустится!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // localStorage.setItem('массив', JSON.stringify(DefaultCards()))

    // useEffect(() => {
    //   // Проверяем, есть ли уже данные в localStorage
    //   if (!localStorage.getItem('массив')) {
    //     // Если нет - записываем начальные данные
    //     const defaultData = DefaultCards();
    //     defaultData[0].tab = 'welcome'; // Устанавливаем welcome tab для первого запуска
    //     localStorage.setItem('массив', JSON.stringify(defaultData));
    //   }
    // }, []);



  //определяю, какая карточка отрисовывается, на выходе получу индекс и передам в state indexPlayer
  function findIndexByIdUsingMap(needId:number): number {
      const data = JSON.parse(localStorage.getItem('массив') || '[]')
      const indices:number[] = [];
      data.map((item:any, index:any) => {
        if (item.id === needId) {
          indices.push(index);
        }
      });
      return indices[0]
  }
  //получаю номер текущего игрока из списка
  function findIndexByCurrent() {
  const data = JSON.parse(localStorage.getItem('массив') || '[]')
  return data[0].current
  }
  // состояние - номер текущей карточки 
  const [numCurrentPlayer, _setNumCurrentPlayer] = useState(parseInt(findIndexByCurrent()))
  // console.log(numCurrentPlayer + ' Текущий номер');

  // Индекс текущего игрока
  const [indexPlayer, _setindexPlayer] = useState(findIndexByIdUsingMap(numCurrentPlayer))
  // console.log(indexPlayer+1 + ' ИД игрока');

  const [isRace, _setIsRace] = useState(descript())

  // состояние попап кнопки инфо
  const [inf, setIsInf] = useState(false)


  //смена страниц
  const [tab, setTab] = useState(JSON.parse(localStorage.getItem('массив') || '[]')[0].tab)
  // setTab(JSON.parse(localStorage.getItem('массив') || '[]')[0].tab)
  //наведение на кнопку вызовет всплывабщее окно
  const [isDel, setIsDel] = useState(false);

  //статус модалки от кнопки обновить
  const [isRefresh, setIsRefresh] = useState(false);

  //статус модалки от кнопки показать всех
  const [isAll, setIsAll] = useState(false);

  function descript():any {
    // Устанавливаем начальное состояние для описания
    const arrHeroes = JSON.parse(localStorage.getItem('массив') || '[]')
    const setRace = arrHeroes[indexPlayer].race  
    const setRacew = arrHeroes[indexPlayer].racew
    const getSex = arrHeroes[indexPlayer].sex

    return [setRace, setRacew, getSex]
  }

  
  return (
    <>
      {tab === 'welcome' && (
        <div className={classes.welcomeWindow}>
          <div onClick={() => {  
            const data = JSON.parse(localStorage.getItem('массив') || '[]')            
            setTab('one');
            data[0].tab = 'one',
            localStorage.setItem('массив', JSON.stringify(data))}}><AnimButton ></AnimButton></div>
            
        </div>
      )}
      {
      tab !== 'two' &&
       (<Panel isRefresh={isRefresh} setIsRefresh={setIsRefresh} setIsDel={setIsDel} isDel={isDel} tab={tab} setTab={setTab} inf={inf} setIsInf={setIsInf}></Panel>)
      }

      {
                tab === 'one' && 
       (<div className={classes.gameSection}>
              <div className={classes.panel_li_cont}>
              <Button onClick={() => {
                  if (tab === 'one') {
                    const data = JSON.parse(localStorage.getItem('массив') || '[]')
                    setTab('two');
                    data[0].tab = 'two',
                    localStorage.setItem('массив', JSON.stringify(data))
                  }  if (tab === 'two') {
                    const data = JSON.parse(localStorage.getItem('массив') || '[]')
                    setTab('one');
                    data[0].tab = 'one',
                    localStorage.setItem('массив', JSON.stringify(data))
                  }
                  }} isAll={isAll} setIsAll={setIsAll}>
              </Button>

                {isAll && tab === 'one'  && (
                  <div className={`${classes.popup} ${classes.popAll}`}>
                        Показать весь отряд
                      </div>
                      )}
              </div>

                {
                  tab === 'one' && (
                    // <Card isRace={isRace} indexPlayer={indexPlayer} numCurrentPlayer={numCurrentPlayer} setindexPlayer={setindexPlayer}></Card>
                    <Card isRace={isRace} indexPlayer={indexPlayer} numCurrentPlayer={numCurrentPlayer} ></Card>

                  )
                }

                {
                  tab === 'two' && (
                    <AllCard/>
                  )
                }
        </div>)}

        {
                  tab === 'two' && 
        (<div className={classes.gameSectionTwo}>
              <div className={classes.panel_li_cont}>
              <Button 
              onClick={() => {
                const data = JSON.parse(localStorage.getItem('массив') || '[]')
                if (tab === 'one') {
                  setTab('two');
                  data[0].tab = 'two';
                  localStorage.setItem('массив', JSON.stringify(data));
                } else if (tab === 'two') {
                  const data = JSON.parse(localStorage.getItem('массив') || '[]')
                  setTab('one');
                  data[0].tab = 'one';
                  localStorage.setItem('массив', JSON.stringify(data));
                }
              }} 
              isAll={isAll} 
              setIsAll={setIsAll}
            >
            </Button>
                {isAll && tab === 'one'  && (
                  <div className={`${classes.popup} ${classes.popAll}`}>
                        Показать весь отряд
                      </div>
                      )}
              </div>

                {
                  tab === 'one' && (
                    // <Card isRace={isRace} indexPlayer={indexPlayer} numCurrentPlayer={numCurrentPlayer} setindexPlayer={setindexPlayer}></Card>
                    <Card isRace={isRace} indexPlayer={indexPlayer} numCurrentPlayer={numCurrentPlayer}></Card>

                  )
                }

                {
                  tab === 'two' && (
                    <AllCard/>
                  )
                }
        </div>)}
        {tab === 'info' && (
          <CardInfo></CardInfo>
      )}

        
    </>
  )
}

export default App

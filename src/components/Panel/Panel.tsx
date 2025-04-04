import classes from './Panel.module.css'
// import DefaultCards from '../DeafultCards.tsx'

interface props {
  isRefresh?: any;
  setIsRefresh?: any;
  isDel?: any;
  setIsDel?: any;
  tab: any;
  setTab: any;
  setIsInf: any;
  inf: any;

}


export default function Panel({isRefresh, setIsRefresh, isDel, setIsDel, tab, setTab, setIsInf, inf } : props): React.ReactElement<any, any> {

    function Refresh(): void {
        window.location.reload();
    }


  const InfoOn = () => {

       tab === 'one' ? setTab('info') : setTab('one')
       
  };
  
    
    function ClearCard(): void {
        alert('!!!!!!!!Внимание, все карточки персонажей удалятся!!!!!!!! Нажми F5 для отмены, нажми ОК, чтобы продолжить')
        localStorage.clear()
        window.location.reload();

    }

    function handleMouseEnter() {
        setIsRefresh(true) ;
      };
      
      const handleMouseLeave = () => {
        setIsRefresh(false);
      };

      function handleMouseEnterDel() {
        setIsDel(true) ;
      };
      
      const handleMouseLeaveDel = () => {
        setIsDel(false);
      };

      function handleMouseEnterInf() {
        setIsInf(true) ;
      };
      
      const handleMouseLeaveInf = () => {
        setIsInf(false);
      };

    return (
        <section>
            <nav>
                <menu>
                    <ul className={classes.sidenav}>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {tab === 'one' && (<button onClick={Refresh}>
                                <div className={classes.ref}></div>
                            </button>)}
                            {isRefresh && tab === 'one' && (
                                <div className={`${classes.popup} ${classes.popRef}`}>
                                  Обновить
                                </div>
                              )}
                        </li>
                        <li onMouseEnter={handleMouseEnterDel} onMouseLeave={handleMouseLeaveDel}>
                        {tab === 'one' && ( <button className={classes.round} onClick={ClearCard}>
                                <div className={classes.del}>
                                </div>
                            </button>)}
                            {isDel && tab === 'one' &&  (
                                <div className={`${classes.popup} ${classes.popDel}`}>
                                  Начать заного
                                </div>
                            )}
                        </li>
                        <li onMouseEnter={handleMouseEnterInf} onMouseLeave={handleMouseLeaveInf}>
                            <button onClick={InfoOn}>
                                <div className={classes.buttonInfo}></div>
                            </button>
                            {inf && tab === 'one' && (
                                <div className={`${classes.popup} ${classes.popInf}`}>
                                  Глоссарий
                                </div>
                              )}
                        </li>
                    </ul>

                </menu>
            </nav>
        </section>
        
    )
}



import styles from '../Portait/Portrait.module.css'

interface PortaitProps {
    newRace: string
    sex: string
    newPortrait?: string

  }

export default function PortaitMini({ newRace, sex, newPortrait  }: PortaitProps): React.ReactElement<any, any> {
    const currentRace = newRace

    return (
        <>
        {newPortrait ? (
          <div className={`${styles.portrait_mini} ${styles.players}`} style={{ background: `url(${newPortrait}) center/cover no-repeat`, backgroundSize: 250}}></div>
        ) : (
          <>
        {currentRace === "Человек" && sex == "Мужчина" &&(    <div className={`${styles.portrait_mini} ${styles.human1}`}></div>  )}
        
        {currentRace === "Гном" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.dwarf1}`}></div>

                )}

        {currentRace === "Урукхай" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.uruk1}`}></div>

                )}  
        {currentRace === "Вампир" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.vamp1}`}></div>

                )}   

        {currentRace === "Каджит" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.had1}`}></div>

                )} 

        {currentRace === "Кентавр" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.kent1}`}></div>

                )} 

        {currentRace === "Гомункул" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.gom1}`}></div>

                )}  
        {currentRace === "Тифлинг" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.tif1}`}></div>

                )}  
        {currentRace === "Гоблин" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.gob1}`}></div>

                )}  
        {currentRace === "Эльф" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.elf1}`}></div>

                )}  

            {currentRace === "Полуэльф" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.poluelf1}`}></div>

                )}  
        {currentRace === "Полурослик" && sex == "Мужчина" &&(
            <div className={`${styles.portrait_mini} ${styles.polu1}`}></div>)} 





        {currentRace === "Человек" && sex == "Женщина" &&(    <div className={`${styles.portrait_mini} ${styles.humanw1}`}></div>  )}
        
        {currentRace === "Гномиха" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.dwarfw1}`}></div>

                )}

        {currentRace === "Орчиха" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.urukw1}`}></div>

                )}  
        {currentRace === "Вампиресса" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.vampw1}`}></div>

                )}   

        {currentRace === "Каджит-киса" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.hadw1}`}></div>

                )} 

        {currentRace === "Кентавриха" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.kentw1}`}></div>

                )} 

        {currentRace === "Гомункул" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.gomw1}`}></div>

                )}  
        {currentRace === "Тифлинг" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.tifw1}`}></div>

                )}  
        {currentRace === "Гоблинша" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.gobw1}`}></div>

                )}  
        {currentRace === "Эльфийка" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.elfw1}`}></div>

                )}  

            {currentRace === "Полуэльфийка" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.poluelfw1}`}></div>

                )}  
        {currentRace === "Полурослая" && sex == "Женщина" &&(
            <div className={`${styles.portrait_mini} ${styles.poluw1}`}></div>)} 
          </>
        )}
      </>
    );
  }
  
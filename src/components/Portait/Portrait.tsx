
import styles from '../Portait/Portrait.module.css'

interface PortaitProps {
  newRace: string
  sex: string
}

export default function Portait({ newRace, sex }: PortaitProps): React.ReactElement<any, any> {
  const currentRace = newRace
    return (
        <>
        
        {currentRace === "Человек" && sex == "Мужчина" &&(    <div className={`${styles.portrait} ${styles.human}`}></div>  )}
        
        {currentRace === "Гном" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.dwarf}`}></div>

                )}

        {currentRace === "Урукхай" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.uruk}`}></div>

                )}  
        {currentRace === "Вампир" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.vamp}`}></div>

                )}   

        {currentRace === "Каджит" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.had}`}></div>

                )} 

        {currentRace === "Кентавр" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.kent}`}></div>

                )} 

        {currentRace === "Гомункул" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.gom}`}></div>

                )}  
        {currentRace === "Тифлинг" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.tif}`}></div>

                )}  
        {currentRace === "Гоблин" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.gob}`}></div>

                )}  
        {currentRace === "Эльф" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.elf}`}></div>

                )}  

            {currentRace === "Полуэльф" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.poluelf}`}></div>

                )}  
        {currentRace === "Полурослик" && sex == "Мужчина" &&(
            <div className={`${styles.portrait} ${styles.polu}`}></div>)} 





        {currentRace === "Человек" && sex == "Женщина" &&(    <div className={`${styles.portrait} ${styles.humanw}`}></div>  )}
        
        {currentRace === "Гномиха" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.dwarfw}`}></div>

                )}

        {currentRace === "Орчиха" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.urukw}`}></div>

                )}  
        {currentRace === "Вампиресса" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.vampw}`}></div>

                )}   

        {currentRace === "Каджит-киса" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.hadw}`}></div>

                )} 

        {currentRace === "Кентавриха" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.kentw}`}></div>

                )} 

        {currentRace === "Гомункул" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.gomw}`}></div>

                )}  
        {currentRace === "Тифлинг" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.tifw}`}></div>

                )}  
        {currentRace === "Гоблинша" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.gobw}`}></div>

                )}  
        {currentRace === "Эльфийка" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.elfw}`}></div>

                )}  

            {currentRace === "Полуэльфийка" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.poluelfw}`}></div>

                )}  
        {currentRace === "Полурослая" && sex == "Женщина" &&(
            <div className={`${styles.portrait} ${styles.poluw}`}></div>)} 

    </>
    )

}
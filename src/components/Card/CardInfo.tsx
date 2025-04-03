import { useState } from 'react';
import classes from './Card.module.css' 
import allData from '../info/allData.tsx'

export default function CardInfo(): React.ReactElement<any, any> {
    
    const userRace = allData()
    const [raceInfo, setRaceInfo] = useState('Человек')

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {  
        setRaceInfo(event.target?.value)
    }    

    function descInfo(): string {
        let descriptionInfo: string = ''
        userRace.map(user =>( user.race === raceInfo ? descriptionInfo = user.description : false));
        return (descriptionInfo)
    }

    function specInfo(): string {
        let specialInfo: string = ''
        userRace.map(user =>( user.race === raceInfo ? specialInfo =user.special : false));
        return (specialInfo)
    }

    return (
        <>
            <section className={classes.description_block}>
                   <div className={classes.description_top}>
                   <select onChange={handleSelectChange} className={classes.h_info}>
                                {userRace.map((item:any, ind:any) => (<option className={classes.option_info} key={ind+121} >{item.race}</option>))}                                
                    </select>   

                    <p className={classes.description}> {descInfo()} </p>
                    <h3 className={classes.h_info1}>Особенности рассы</h3>
                    <p className={classes.description}> {specInfo()} </p>
                </div>
            </section>
        </>
    );
    }
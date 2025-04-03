/* eslint-disable @typescript-eslint/no-explicit-any */

//функция определения класса персонажа
export default function getClass(ind:number, isRace:string) {

    interface Card {
        Streng: number;
        Agility: number;
        Intelligence: number;
        Charism: number;
        class?: string,
        healOfClass?: number,
    }
    
    interface SpecializationMap {
        [key: string]: string; // Маппинг характеристик на специализации
    }
    
    const specializationMap: SpecializationMap = {
        Streng: 'Воин',
        Agility: 'Плут',
        Intelligence: 'Чародей',
        Charism: 'Бард'
    };
    
    function getMaxSpecialization(): string | null {
        const storedCards: Card[] = JSON.parse(localStorage.getItem('массив') || '[]');
        
        
        if (storedCards.length === 0) {
            return null; // Возвращаю null, если карта отсутствует
        }
        
        const card = storedCards[ind]; 
        const { Streng, Agility, Intelligence, Charism } = card;
    
        const stats:any = {
            Streng,
            Agility,
            Intelligence,
            Charism
        };
    
        // Находим максимум среди характеристик - ключ
        const maxStatKey = Object.keys(stats).reduce((a, b) => Number(stats[a]) > Number(stats[b]) ? a : b);

        // Находим максимум среди характеристик - значение
        // const maxVal = Math.max(Object.values(stats)[0], Object.values(stats)[1], Object.values(stats)[2], Object.values(stats)[3])
        const [val1, val2, val3, val4]:number[] = Object.values(stats);
        const maxVal = Math.max(val1, val2, val3, val4)

        function finalClass() {
            let initSpec = ''
           if (isRace[2] === 'Женщина' && specializationMap[maxStatKey] === 'Воин') {
                initSpec = 'Воительница'
            }
            else if (isRace[2] === 'Женщина' && specializationMap[maxStatKey]  === 'Плут') {
                initSpec = 'Разбойница'
            }
            else if (isRace[2] === 'Женщина' && specializationMap[maxStatKey] === 'Чародей') {
                initSpec = 'Чародейка'
            }
            else if (isRace[2] === 'Женщина' && specializationMap[maxStatKey] === 'Бард' ) {
                initSpec = 'Бардесса'
            }
            if (isRace[2] === 'Мужчина' && specializationMap[maxStatKey] === 'Воин') {
                initSpec = 'Воин'
            }
            else if (isRace[2] === 'Мужчина' && specializationMap[maxStatKey]  === 'Плут') {
                initSpec = 'Плут'
            }
            else if (isRace[2] === 'Мужчина' && specializationMap[maxStatKey] === 'Чародей') {
                initSpec = 'Чародей'
            }
            else if (isRace[2] === 'Мужчина' && specializationMap[maxStatKey] === 'Бард' ) {
                initSpec = 'Бард'
            }
            return initSpec
        }
        
        card.class = finalClass()
        card.healOfClass = maxVal
        
        localStorage.setItem('массив', JSON.stringify(storedCards))

            // Возвращаем соответствующую специальность
            return finalClass() || null;

    }

    
    return getMaxSpecialization()
}

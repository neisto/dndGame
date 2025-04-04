// Определяем интерфейс для карты
interface Cards {
    id: number;
    name: string;
    race: string;
    racew: string;
    class: string;
    health: number;
    defence: number;
    Streng: number; // сила
    Agility: number; // ловкость
    Intelligence: number; // интеллект
    Charism: number; // харизма
    Smod?: number; // сила модификатор
    Amod?: number; // ловкость модификатор
    Imod?: number; // интеллект модификатор
    Chmod?: number; // харизма модификатор
    def: string;
    healOfClass: number;
    sex: string,
    current: number;
    tab: string;
}


export default function StartCardArr(): Cards[] {

// Создаем массив карт с типом Card[]
const arrCards: Cards[] = [
    {
        id: 1,
        name: '',
        race: 'Человек',
        racew: 'Человек',
        class: 'Воин',
        health: 1,
        defence: 8,
        Streng: 1,
        Agility: 1,
        Intelligence: 1,
        Charism: 1,
        def: '8',
        healOfClass: 1.2,
        sex: 'Мужчина',
        current: 1,
        tab: 'welcome',

    },
    {
        id: 2,
        name: '',
        race: 'Гомункул',
        racew: 'Человек',
        class: 'Бард',
        health: 1,
        defence: 8,
        Streng: 2,
        Agility: 2,
        Intelligence: 2,
        Charism: 2,
        def: '8',
        healOfClass: 1.2,
        sex: 'Мужчина',
        current: 1,
        tab: 'one',

    },
    {
        id: 3,
        name: '',
        race: 'Урукхай',
        racew: 'Вампиресса',
        class: 'Бардесса',
        health: 1,
        defence: 8,
        Streng: 1,
        Agility: 1,
        Intelligence: 1,
        Charism: 1,
        def: '8',
        healOfClass: 1.2,
        sex: 'Женщина',
        current: 1,
        tab: 'one',
    },
    {
        id: 4,
        name: '',
        race: 'Гоблин',
        racew: 'Человек',
        class: 'Плут',
        health: 1,
        defence: 8,
        Streng: 1,
        Agility: 1,
        Intelligence: 1,
        Charism: 1,
        def: '8',
        healOfClass: 1.2,
        sex: 'Мужчина',
        current: 1,
        tab: 'one',

    },
    {
        id: 5,
        name: '',
        race: 'Человек',
        racew: 'Человек',
        class: 'Куртизанца',
        health: 1,
        defence: 8,
        Streng: 1,
        Agility: 1,
        Intelligence: 1,
        Charism: 1,
        def: '8',
        healOfClass: 1.2,
        sex: 'Женщина',
        current: 1,
        tab: 'welcome',

    },
];

    return arrCards
} 




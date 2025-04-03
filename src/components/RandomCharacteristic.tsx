//сбросить кубики (бросается 4 кубика D6, складывается 3 наибольших результата), вторым параметром возвращается модификатор характеристики (-10, делится на 2, округляется в меньшую сторону), 
//3 числов в массиве возвращается сумма двух кубиков D6 для сбрасывания расы

export default function RandomChar(): number[] {
    const arrSumm: number[] = [];
    for (let i = 1; i <= 4; i++) {
        arrSumm.push(Math.floor(Math.random() * 6) + 1)
    }
    const arrSummDouble: number[] = [];
    for (let i = 1; i <= 2; i++) {
        arrSummDouble.push(Math.floor(Math.random() * 6) + 1)
    }

    return [(arrSumm.sort((a, b) => b - a)).slice(0,3).reduce((summ,item) => summ+item), Math.floor((((arrSumm.sort((a, b) => b - a)).slice(0,3).reduce((summ,item) => summ+item)-10))/2), arrSummDouble.reduce((summ,item) => summ+item)]

}
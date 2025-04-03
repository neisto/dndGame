import allData from '../components/info/allData.tsx'

const userRace = allData()


export default function UserRaceInit(numState: number) {
    return userRace.filter(user => user.state <= numState)
};
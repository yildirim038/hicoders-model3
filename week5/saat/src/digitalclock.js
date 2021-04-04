import {useState} from 'react'

export default function DigitalSaat() {
    const [seconds,setSeconds] = useState(0)
    const [minute,setMinute] = useState(0)
    const [hours,setHours] = useState(0)
    setInterval(()=>{
        const date =new Date()
        setSeconds(date.getSeconds())
        setMinute(date.getMinutes())
        setHours(date.getHours())
    },1000)
    return(
        <span>{hours}:{minute}:{seconds}</span>
    )
}
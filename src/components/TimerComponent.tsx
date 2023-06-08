import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"

export const TimerComponent = ()=>{
    const {time}= useContext(TimerContext)
    return(
     
        <h1 className=" text-8xl md:text-9xl text-dark-text-bg font-timer font-bold">{time}</h1>
    )
}
import { createContext } from "react"


interface TimerContextType{
    time : string,
    isRun:boolean,
    startTimer():any,
    pauseTimer():any,
    clearTimer():any,
    setActive:Function,
    active:string
    

}

export const TimerContext  = createContext<TimerContextType>({time : '00:00',isRun:false,startTimer:()=>{},pauseTimer:()=>{},clearTimer:()=>{}, setActive:()=>{}, active:"1"})
// import { useContext } from "react"
// import { ThemeContext } from "../context/ThemeContext"

import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"
import { FC } from 'react';



export const PageComponent : FC=()=>{
    const {time,startTimer}= useContext(TimerContext)
    return(
        <div>
            <button onClick={()=>{startTimer()}}>click Page</button>
            <div className="">
                Time now is :
                {time}
                is run :
            
            </div>
        </div>
    )
}
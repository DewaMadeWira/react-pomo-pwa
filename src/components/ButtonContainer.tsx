import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"
import { Button } from "./Button"



export const ButtonContainer= ()=>{
    const {startTimer,pauseTimer,clearTimer,isRun}= useContext(TimerContext)

    return(
        <div className="flex w-1/4 justify-between">
            <>
            {isRun == false ? (
                
            <Button clickFunction={startTimer} content="Start" primary={true}></Button>
            ):
            (<Button clickFunction={pauseTimer} content="Pause" primary={true}></Button>)
            }
            <Button clickFunction={clearTimer} content="Clear" primary={false}></Button>
            </>
        </div>
    )
}
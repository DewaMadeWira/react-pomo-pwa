import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"
import { Button } from "./Button"


import { FC } from "react"
import { ThemeContext } from "../context/ThemeContext"

type ButtonType={
    screenWidth:number
    
}


export const ButtonContainer :FC <ButtonType>= ({screenWidth})=>{
    const {theme} = useContext(ThemeContext)
    const {startTimer,pauseTimer,clearTimer,isRun,active,setActive}= useContext(TimerContext)

    return(
     <>
        {screenWidth >= 1000 ? ( 
        <div className="flex md:w-1/4 lg:1/3 box-border md:justify-between w-full justify-around">
            {isRun == false ? (
                    
                <Button clickFunction={startTimer} content="Start" primary={true}></Button>
                ):
                (<Button clickFunction={pauseTimer} content="Pause" primary={true}></Button>)
                }
                <Button clickFunction={clearTimer} content="Clear" primary={false}></Button>
        </div>)
    :(
    <div className="flex flex-col gap-5">

        {isRun == false ? (
            <button onClick={()=>{startTimer()}} className={`${theme === 'light' ? 'bg-dark-text-bg ' : 'bg-white-bg' } text-dark-text-bg text-2xl font-hind  rounded-md h-fit w-full `}>
            <span className='bg-yellow-btn block box-border border-dark-text-bg  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-4 w-full transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]'>
                        Start
                    </span>
            </button>
        ):(
            <button onClick={()=>{pauseTimer()}} className={`${theme === 'light' ? 'bg-dark-text-bg ' : 'bg-white-bg' } text-dark-text-bg text-2xl font-hind  rounded-md h-fit w-full`}>
                <span className='bg-yellow-btn block box-border border-dark-text-bg  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-4 w-full transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]'>
                            Pause
                        </span>
                </button>
        )}
        
        <div className="flex gap-10">
            <Button clickFunction={pauseTimer} content="Pause" primary={false}></Button>
            <button  className={`${theme === 'light' ? 'bg-dark-text-bg ' : 'bg-white-bg' } flex justify-center text-2xl font-hind  rounded-md h-fit w-fit`}>
            <span className={`${theme === 'dark' ? 'bg-dark-btn text-white-bg border-white-bg' : 'bg-white-bg border-dark-text-bg'} block box-border border-dark-text-bg  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-5 transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]`}>
            <select name="" id=""className={`${theme === 'dark' ? 'bg-dark-btn text-white-bg' : 'bg-white-bg' } appearance-none text-center text-dark-text-bg text-2xl`}>
                    <option value=""  onClick={()=>setActive("1")}>Pomodoro</option>
                    <option value=""  onClick={()=>setActive("2")}>Short Break</option>
                    <option value=""  onClick={()=>setActive("3")}>Custom</option>
            </select>
            </span>
            </button>
        </div>
    </div>
        )
    }</>
       
    )
}
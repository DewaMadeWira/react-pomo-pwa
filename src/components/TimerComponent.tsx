import { useContext, useState, FC, useEffect} from "react"
import { TimerContext } from "../context/TimerContext"
import { ThemeContext } from "../context/ThemeContext"

type TimerComponentType ={
    callbackTimer:Function
}


export const TimerComponent : FC <TimerComponentType> = ({callbackTimer})=>{
    const {time, isRun, active}= useContext(TimerContext)

    const {theme} = useContext(ThemeContext)

    const [length, setLength]= useState(2)

    const [input, setInput]= useState('')

    useEffect(()=>{
        if(input=='') return
        console.log("child"+parseInt(input) * 60 * 1000)
        if(active =="3") callbackTimer(parseInt(input) * 60 * 1000)
        
    },[isRun,input])

        


    return(
        <div className="flex justify-center">
            {active === "3" && isRun ==false ?   (
               
            <input style={{width:length +'ch'}} onChange={(e)=>{
                if(e.target.value.length==0){
                    e.target.style.width = 1 + 'ch'
                    setLength(1)
                }
                setInput(e.target.value)
                setLength(e.target.value.length)
                
                
            }}  type="text" className={`text-8xl md:text-9xl font-timer outline-none font-bold  text-center appearance-none transition-all ${theme == 'dark' ? 'bg-dark-text-bg text-white-bg' : 'bg-white-bg text-dark-bg'}`} maxLength={2} placeholder="00" value={input}
                disabled={isRun} required
                />): (
                    <input style={{width:length +'ch'}} onChange={(e)=>{
                        if(e.target.value.length==0){
                            e.target.style.width = 1 + 'ch'
                            setLength(1)
                        }
                        setLength(e.target.value.length)}}  type="text" className={`text-8xl md:text-9xl font-timer outline-none font-bold  text-center appearance-none transition-all ${theme == 'dark' ? 'bg-dark-text-bg text-white-bg' : 'bg-white-bg text-dark-bg'}`} maxLength={2} value={time}
                        disabled
                        />
                )}
           
            <input style={{width:3+'ch'}} value={`:${time.charAt(3)}${time.charAt(4)} `} type="text"className={`text-8xl md:text-9xl transition-all font-timer font-bold text-center appearance-none ${theme == 'dark' ? 'bg-dark-text-bg text-white-bg' : 'bg-white-bg text-dark-bg'}`} disabled/>
        </div>
        
        // <h1 className=" text-8xl md:text-9xl text-dark-text-bg font-timer font-bold">{time}</h1>
        
    )
}
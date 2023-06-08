import { useState, useEffect } from 'react'
import './App.css'
import { TimerContext } from './context/TimerContext'
import { TimerComponent } from './components/TimerComponent'
import { ButtonContainer } from './components/ButtonContainer'
import { Mode } from './components/Mode'

function App() {
  // Milisecond to minutes
  const duration = 25 * 60 * 1000
  // Remaining Time in milisecond
  let [remainingTime,setRemainingTime] = useState(duration)
  // Interval as state
  const [timerFunction, setTimerFuncton]= useState<any>()
  // Is running State
  const [isRun,setIsRun]= useState(false)
  // Formatted time
  const [time, setTime]= useState('')
  // Which mode is active
  const [active,setActive] = useState("1")
  // Width state
  const [screenSize, setScreenSize] = useState(getCurrentDimension());


  // Use Effect for mode

  useEffect(()=>{
    let time = 0
    clearTimer()
    if(active=="1"){
      time = 25 * 60 * 1000
      setRemainingTime(time)
      updateRemaining(time)
    }
    else if(active=="2"){
      time = 5 * 60 * 1000
      setRemainingTime(time)
      updateRemaining(time)
    }
    

  },[active])

  useEffect(()=>{
    updateRemaining(remainingTime)
  },[remainingTime])

  // Use effect for Width

  function getCurrentDimension(){
    return {
      	width: window.innerWidth,
      	height: window.innerHeight
    }
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    

    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  // Timer Function

  function startTimer(){
    if(isRun===false){
      setTimerFuncton(
        setInterval(()=> {
          setRemainingTime(remainingTime-=1000)
          // updateRemaining(remainingTime)
        }, 1000)
      )
      setIsRun(!isRun)
    }
  }

  function pauseTimer(){
    if(isRun==true){
      clearInterval(timerFunction)
      setIsRun(!isRun) 
    }
  }

  function  clearTimer(){
    
    clearInterval(timerFunction)
    if(active == "1")setRemainingTime(25 * 60 * 1000)
     
    if(active == "2") setRemainingTime(5 * 60 * 1000)
    
    
    // setTimeout(()=>{updateRemaining(remainingTime)}, 10)
    
    // updateRemaining(remainingTime)
    setIsRun(false)
    return
}


  function updateRemaining(ms: number){
    let total_seconds = Math.floor(ms/1000)
    let total_minutes = Math.floor(total_seconds/60)
    
    let seconds = (total_seconds % 60).toString()
    let minutes = (total_minutes % 60).toString()

    if(seconds.length==1){
      seconds = `${seconds}0`
    } 
    if(minutes.length==1){
      minutes = `0${minutes}`
    } 
    // if(minutes.toString().length == 1)

    setTime(`${minutes}:${seconds}`)  
  }

  

  return(
    <div className='bg-white-bg w-full h-screen flex flex-col justify-around items-center'>
      <div className="">
        <h1 className='text-5xl text-center font-mont text-dark-text-bg font-bold'>Pomodoro Timer</h1>
       
      </div>
      {
          screenSize.width <= 1000 ? (
            <></>
          ):(
            <div className="flex w-1/2 justify-between font-mont">
            <Mode active={active} content='Pomodoro' itemId='1' setActive={setActive}></Mode>
            <Mode active={active} content='Short Break' itemId='2'  setActive={setActive}></Mode>
            <Mode active={active} content='Custom' itemId='3'  setActive={setActive}></Mode>
          </div>
          )
        }
      
      <TimerContext.Provider value={{time,isRun,startTimer,pauseTimer,clearTimer,setActive,active}}>
      <TimerComponent></TimerComponent>
      <ButtonContainer screenWidth={screenSize.width}></ButtonContainer>
      </TimerContext.Provider>
      <footer className='font-hind text-lg hover:-translate-y-2 transition-all'>
      <a  href="https://www.flaticon.com/free-icons/stopwatch" title="stopwatch icons">Stopwatch icons created by <span className='font-bold'>monkik - Flaticon</span></a>
      </footer>
    </div>
  )

  // return (
  //   <>
  //     <ThemeContext.Provider value={{themeValue}}>
  //       <button onClick={()=>setThemeValue((prev)=>prev === 'dark' ? 'light': 'dark')}>Change value to {themeValue}</button>
  //       <PageComponent></PageComponent>
  //     </ThemeContext.Provider>
  //   </>
  // )
}

export default App

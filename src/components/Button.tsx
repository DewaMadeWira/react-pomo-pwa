import { FC } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useContext} from "react"



type ButtonType={
    content:string,
    primary:boolean,
    clickFunction:Function

}



export const Button : FC <ButtonType>  = ({content,primary,clickFunction})=>{

    const {theme} = useContext(ThemeContext)
    // ${theme === 'dark' ? 'bg-dark-btn text-white-bg' : 'bg-white-bg' }
    return(
        <>
            {
                primary == false ? (
                <button onClick={()=>{clickFunction()}} className={`${theme === 'light' ? 'bg-dark-text-bg ' : 'bg-white-bg' } text-2xl  font-hind rounded-md h-fit w-fit`}>
                    <span className={`${theme === 'dark' ? 'bg-dark-btn text-white-bg border-white-bg' : 'bg-white-bg border-dark-text-bg'} block box-border  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-11 transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]`}>
                        {content}
                    </span>
                </button>
                ): (
                    <button onClick={()=>{clickFunction()}} className={`${theme === 'light' ? 'bg-dark-text-bg ' : 'bg-white-bg' } text-2xl font-hind  rounded-md h-fit w-fit text-dark-text-bg`}>
                        <span className='bg-yellow-btn block box-border border-dark-text-bg  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-11 transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]'>
                            {content}
                        </span>
                    </button>
                )
            }
      </>
    )
}
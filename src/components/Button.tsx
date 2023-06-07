import { FC } from 'react';


type ButtonType={
    content:string,
    primary:boolean,
    clickFunction:Function

}

export const Button : FC <ButtonType>  = ({content,primary,clickFunction})=>{
    return(
        <>
            {
                primary == false ? (
                <button onClick={()=>{clickFunction()}} className='bg-dark-text-bg text-2xl font-hind  rounded-md h-fit w-fit'>
                    <span className='bg-white-bg text-dark-text-bg block box-border border-dark-text-bg  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-11 transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]'>
                        {content}
                    </span>
                </button>
                ): (
                    <button onClick={()=>{clickFunction()}} className='bg-dark-text-bg text-2xl font-hind  rounded-md h-fit w-fit'>
                        <span className='bg-yellow-btn block box-border border-dark-text-bg  border-2 -translate-y-[0.4rem] -translate-x-[0.4rem] rounded-md p-2 px-11 transition-all hover:-translate-y-[0.7rem] hover:-translate-x-[0.7rem] active:translate-x-[0] active:translate-y-[0]'>
                            {content}
                        </span>
                    </button>
                )
            }
      </>
    )
}
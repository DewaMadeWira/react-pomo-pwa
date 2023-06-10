import { FC } from "react"

type ModeType={
    active:string,
    content:string,
    setActive:Function,
    itemId:string,
    
}

export const Mode :FC<ModeType> = ({active,content,setActive, itemId})=>{

    return(
        <h3 id={itemId} className={`text-3xl ${active==itemId ? "font-bold":""} text-inherit hover:-translate-y-1 transition-all cursor-pointer`} onClick={()=>setActive(itemId)}>{content}</h3>
    )
}
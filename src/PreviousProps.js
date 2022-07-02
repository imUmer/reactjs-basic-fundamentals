import { useEffect, useRef, useState } from "react"


function PreciousProps(props)
{
    const lastCount=useRef()
    useEffect(()=>{
        lastCount.current=props.count
    })
    const preVal = lastCount.current
    return(
        <div>
            <h2>Previous State: {preVal}</h2>
            <h2>Next State: {props.count}</h2>
        </div>
    )
}
export default PreciousProps
import React, { useEffect, useState } from "react";

export default function UseEffectStateProps ()
{
    console.warn('component will unmount : render mounted')
    const [count,setCount]=useState(0)
    const [counter,setCounter]=useState(0)
    useEffect(
        ()=>{
            console.warn('useEffect on count')
    },[count])
    useEffect(
        ()=>{
            console.warn('useEffect on counter')
    },[counter])
    return(
        <div>
            <h2>Counter : {count+1}</h2>
            <button onClick={()=>setCount(count+1 )}>Update counter</button>
        </div>
    )
}
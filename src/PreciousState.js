import { useState } from "react"


function PreciousState()
{
    const [count,setCount]=useState(1)
    const [lastCount,setLastCount]=useState(1)
    function updateCounter()
    {
        // let rand = Math.floor(Math.random()*10)
        // setCount((pre)=>{
        //     console.warn(pre);
        //     setLastCount(pre)
        //     return rand
        // })
        for (let i = 0; i<5; i++) {
            setCount((pre)=>pre+1)            
        }
    }
    return(
        <div>
            <h2>Previous State: {lastCount}</h2>
            <h2>Next State: {count}</h2>
            <button onClick={updateCounter}>Update</button>
        </div>
    )
}
export default PreciousState
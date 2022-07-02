import { useState, useMemo } from "react"

export default function UseMemoHook()
{
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)
    const multiCountMemo = useMemo(function multiCount(){
        console.warn('multiCount')
        return count*5
    },[data])
    return(
        <div>
            <h2>useMemo Hook</h2>
            <h2>Counter : {count}</h2>
            <h2>Data : {data}</h2>
            <h2>Multiplier {multiCountMemo}</h2>
            <button onClick={()=>setCount(count + 1)}>Counter Increment</button>
            <button onClick={()=>setData(data * 10)}>Data Increment</button>
        </div>
    )
}
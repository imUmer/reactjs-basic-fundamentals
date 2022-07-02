/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from "react"


 function startHOC()
{
    return(
        <div>
            <h2>main Component</h2>
            <HOC cmp={Counter}/>
        </div>
    )
}
/// high order component is used asa a wraper in this file
function HOC(props)
{
return <h2 style={{backgroundColor:'red'}}> <props.cmp /></h2>
}
function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h2>counter : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}
export default startHOC

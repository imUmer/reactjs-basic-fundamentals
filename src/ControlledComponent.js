import { useState } from "react"


 function ControlledComponent()
{
    let [val,setVal]=useState("")
    return(
        <div>
                <h2>working with Controlled Component</h2>
                <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
                <h2>Value : {val}</h2>
            </div>
    )
}
export default ControlledComponent
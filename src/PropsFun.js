import React from "react"
function PropsFun(props)
{
    return(
        <div>
            <button onClick={()=>props.data()}>get Function</button>
        </div>
    )
}
export default PropsFun
import React, { useState } from "react";

function TogglesButtons()
{
    const [status, setStatus]= useState(false)
    const [btn, setBtnName]= useState('show')
    let name = "Umer"
    function updataChanges()
    {
        btn === 'show'?
        setBtnName('Hide'): setBtnName('show')
        setStatus(!status)
    }
    return(
        <div>
            {
                status? <h2> Hi, {name}</h2>: null
            }

            {/* on two buttons  */}
            {/* <button onClick={()=>setStatus(false)}>hide</button>
            <button onClick={()=>setStatus(true)}>show</button> */}

            {/* on single button */}
            <button onClick={()=>updataChanges(true)}>{btn}</button>

        </div>
    )
}

export default TogglesButtons;
import { useState, useRef } from "react"


 function UncontrolledComponent()
{
    let [val,setVal]=useState("")
    let inputRef=useRef(null)
    function submitForm(e)
    {
        e.preventDefault()
        console.warn("getting input firld 1 from Ref : ", inputRef.current.value)
        let ip2 = document.getElementById('ip2').value
        console.warn("getting input firld 2 from DOM : ", ip2)
    }
    return(
        <div>
                <h2>working with Uncontrolled Component</h2>
                <form onSubmit={submitForm}>
                    <input type='text' ref={inputRef}/> <br/><br/>
                    <input type='text' id="ip2"/> <br/><br/>
                    <button type='submit'>submit</button> <br/><br/>
                </form>
            </div>
    )
}
export default UncontrolledComponent
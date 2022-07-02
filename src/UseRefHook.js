import { useRef } from "react"

export default function UseRefHook()
{
    let inputRef=useRef(null)
    function handleInput()
    {
        console.warn('function Called')
        inputRef.current.value=1000
        inputRef.current.focus()
        inputRef.current.style.display = 'none'
    } 
    return(
        <div>
                <h2>working with useRef</h2>
                <input type="text"  ref={inputRef}/>
                <button onClick={()=>handleInput()} >Check</button>
            </div>
    )
}

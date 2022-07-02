import { useState } from "react"

function Conditions()
{
    const [loggenIn,setLoginState] = useState(true)
    return(
        <div>
           {(loggenIn)? <h2>Welcome Umer</h2>:<h2>not user</h2>}
        </div>
    )
}
export default Conditions
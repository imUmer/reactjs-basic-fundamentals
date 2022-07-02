import { forwardRef } from "react"
 function ForwardRefHook(props,incomeRef)
{
    return(
        <div>
                <h2>working with forwardRef</h2>
                <input type="text"  ref={incomeRef}/>
            </div>
    )
}
export default forwardRef(ForwardRefHook)
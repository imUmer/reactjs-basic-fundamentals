import React, { useState } from "react";

function FormsWthFun()
{
    const [name,setName]=useState('')
    const [rating,setRating]=useState(0)
    const [like,setLike]=useState(false)
    function getFormData(e)
    {
        console.warn(name,rating,like)
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={getFormData}>
                <input type='text' placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/> <br/> <br/>
                <select onChange={(e)=>{setRating(e.target.value)}}>
                    <option>select</option>
                    <option>1</option>
                    <option>2</option>
                </select> <br/> <br/>
                <input type='checkBox' onChange={(e)=>{setLike(e.target.checked)}}/> <br/> <br/>
                <button type="submit">Submit</button> <br/>
                <button >clear</button> <br/>
            </form>
        </div>
    )
}
export default FormsWthFun
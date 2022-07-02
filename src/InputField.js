/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from "react";

function inputField(){
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    function getValue(val)
    {
        setData(val.target.value)
        setPrint(false)
    }
    return(
        <div>
            {
                print?
                <h2> {data}</h2>
                : null
            }
            {/* <h2> {data} </h2> */}
            <input type="text" onChange={getValue} />
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    )
}

export default inputField;
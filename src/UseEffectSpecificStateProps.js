
import React, { useEffect, useState } from "react";

export default function UseEffectSpecificStateProps (props)
{
    useEffect(
        ()=>{
            console.warn('useEffect on name : '+ props.name)
    },[props.name,props.data])
    return(
        <div>
            <h2>Counter : {props.name}</h2>
            <h2>Counter : {props.data}</h2>
        </div>
    )
}
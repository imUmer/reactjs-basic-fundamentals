
import React from "react";

export default class ComponentWillUnmount extends React.Component
{
    componentWillUnmount()
    {
        alert('component Unmounted')
    }
    render()
    {
        console.warn('component will unmount : render mounted')
        return(
            <div>
                <h2>Component Ready {}</h2>
            </div>
        )
    }
}
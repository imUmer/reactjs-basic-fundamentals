import React from "react";

export default class ConstructorLSM extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            name:'Umer'
        }
    }
    render()
    {
        return(
            <div>
                <h2>Name : {this.state.name}</h2>
            </div>
        )
    }
}
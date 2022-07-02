import React from "react";

export default class RenderLSM extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email:'umer@test.com'
        }
    }
    render()
    {
        console.warn(this.props.name,this.state.email)
        return(
            <div>
                <h2>Render props : {this.props.name}</h2>
                <h2>Render state : {this.state.email}</h2>
                <button onClick={()=>this.setState({email: 'Updated State : umerniaz@test.com'})}>Update Email</button>
            </div>
        )
    }
}
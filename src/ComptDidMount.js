import React from "react";

export default class ComptDidMount extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email:'umer@test.com'
        }
    }
    // eslint-disable-next-line react/no-typos
    componentDidMount()
    {
        console.warn('Component mounted')
        this.setState({email: 'Updated State : umerniaz@test.com'})
    }
    render()
    {
        console.warn('render mounted')
        return(
            <div>
                <h2>Component mount : {this.state.email}</h2>
                <button onClick={()=>this.setState({email: 'Updated State : umerniaz@test.com'})}>Update Email</button>
            </div>
        )
    }
}
import React from "react";

export default class ComptDidUpdate extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            email:'umer@test.com',
            count: 0
        }
    }
    // eslint-disable-next-line react/no-typos
    componentDidUpdate(preProps,preStates,snapshot)
    {
        console.warn('Component Updated :',preStates)
    }
    render()
    {
        console.warn('component update : render mounted')
        return(
            <div>
                <h2>Component mount : {this.state.count}</h2>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update Email</button>
            </div>
        )
    }
}
import React from "react"

export default class PureComponent extends React.PureComponent
{
    constructor()
    {
        super()
        this.state = {
            data:0
        }
    }
    render()
    {      
        console.warn('Component Updated')  
        return(
        <div>
            <h2>Pure component with State and props</h2>
            <h2>Counter : {this.state.data}</h2>
            <button onClick={()=>this.setState({data: 1})}>Increment 1</button>
        </div>
    )
    }
}
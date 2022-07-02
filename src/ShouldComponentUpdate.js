
import React from "react";

export default class ShouldComponentUpdate extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            count: 0,
            ans: false
        }
    }
    componentDidUpdate()
    {
        console.warn('Did Component Update : ',this.state.ans)
    }
    // eslint-disable-next-line react/no-typos
    shouldComponentUpdate()
    {
        console.warn('should Component Update : ',this.state.ans)
        return this.state.ans
    }
    render()
    {
        console.warn('component update : render mounted')
        return(
            <div>
                <h2>Component update : {this.state.count} .. {this.state.ans}</h2>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update Email</button>
            </div>
        )
    }
}
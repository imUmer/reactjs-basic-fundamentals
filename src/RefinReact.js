import { Component, createRef } from "react";

export default class RefinReact extends Component
{
    constructor(){
        super()
        this.inputRef=createRef()
    }
    componentDidMount()
    {
        console.warn(this.inputRef )
    }
    getVal()
    {
        console.warn('clicked')
        this.inputRef.current.style.color = 'Green'
        this.inputRef.current.style.backgroundColor = 'Black'
    }
    render()
    {
        return(
            <div>
                <h2>working in Forms</h2>
                <input type="text"  ref={this.inputRef}/>
                <button onClick={()=>this.getVal()} >Check</button>
            </div>
        )

    }
}
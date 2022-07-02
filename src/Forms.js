import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

// function Forms()
export default class Forms extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            name:'',
            rating: 0,
            like: false
        }
    }
    getFormData(e)
    {
        console.log('here : ' )
        // console.warn(this.state.name)
        e.preventDefault()
    }  
    render()
    {
        
        return(
            <div>
                Name : {this.state.name} <br/>
                Rating : {this.state.rating} <br/>
                Likes : {this.state.like} <br/>
                <form onSubmit={this.getFormData} style={{backgroundColor:'indianred'}}>
                    Name : <input type='text' placeholder="name" onChange={(e)=>{this.setState({name:  e.target.value})}}></input> <br/><br/>
                    Rating : <select type='text' placeholder="rating" onChange={(e)=>{this.setState({rating:  e.target.value})}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select> <br/><br/>

                    Like : <input type='checkbox' onChange={(e)=>{this.setState({like:  e.target.checked})}}/> <br/><br/>
                    <button type='submit'>Submit</button> <br/><br/>
                </form>
            </div>
        )
        }
}
// export default Forms
import {Component, useState} from 'react';

class StateClass extends Component {

    constructor(){
        super()
        this.state = {
            name : 'Umer',
            count: 0
        }
    }

    changeName(){
        this.setState({name: 'Umer Malik'})
        this.setState({count: this.state.count+1})
    }
    render(){
        return (
            <div>
             <h3><span>My name is : </span> { this.state.name } </h3>
             <h3><span>Counter : </span> { this.state.count } </h3>
             <button onClick={()=> this.changeName()}>Update Data</button>
            </div>
          );
    }
}

export default StateClass;

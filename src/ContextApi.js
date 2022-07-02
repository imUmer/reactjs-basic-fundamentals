import { Component } from "react";
import {CommonContext} from './components/commonContext'
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/Main";
import UpdateButton from "./components/UpdateButton";
export default class ContextApi extends Component
{
    constructor()
    {
        super()
        this.updateColor=(color)=>{
            this.setState({
                color:color
            })
        }
        this.state = {
            color:'blue',
            updateColor:this.updateColor
        }
    }
    render()
    {
        return(
            <div>
                <CommonContext.Provider value={this.state}>
                 <h2>Context Api Class</h2>
                 <Header/>
                 <Main />
                 <UpdateButton />
                 <Footer/>
                </CommonContext.Provider>
            </div>
        )
    }
}
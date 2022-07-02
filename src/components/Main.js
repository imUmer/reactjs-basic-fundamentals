import { Component } from "react";
import {CommonContext} from './commonContext'
export default class Main extends Component
{
    render()
    {
        return(
            <div>
                <CommonContext.Consumer >
                    {
                        ({color})=>(
                            <h2 style={{backgroundColor:color}}> This is main function</h2>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}
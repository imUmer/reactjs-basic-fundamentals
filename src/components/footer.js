import { Component } from "react";
import {CommonContext} from './commonContext'
export default class Footer extends Component
{
    render()
    {
        return(
            <div>
                <CommonContext.Consumer >
                    {
                        ({color})=>(
                            <h2 style={{backgroundColor:color}}> Footer</h2>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}
import { Component } from "react";
import {CommonContext} from './commonContext'
export default class Header extends Component
{
    render()
    {
        return(
            <div>
                <CommonContext.Consumer >
                    {
                        ({color})=>(
                            <h2 style={{backgroundColor:color}}> Header</h2>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}
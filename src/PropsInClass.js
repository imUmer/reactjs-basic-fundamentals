import React from "react";

export default class PropsInClass extends React.Component {
    render()
    {
        return(
            <div>
                <h3>Name : {this.props.name}</h3>
            </div>
        )
    }
}
import React, { Component } from "react"

function MyComp(){
    return <h1>Hello My Component.....</h1>
}
export default class CompInCom extends Component{
    render(){
        return(
            <React.Fragment>
                <div>CompInCom</div>
            </React.Fragment>
        )
    }
}
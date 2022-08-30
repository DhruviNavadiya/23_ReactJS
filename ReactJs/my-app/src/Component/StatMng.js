import React, { Component } from 'react'
import style from "./style.css";

export default class StatMng extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
    Handlestate=()=>{
        this.setState({count: this.state.count +1})
    }
    Decrement=()=>{
        this.setState({count: this.state.count -1})
    }
  render() {
    return (
        <>
         <center>
            <div className={`form ${style.form}`}>
            <h1 className={`head1 ${style.head1}`}>React Web</h1>
            <h1 className={`head2 ${style.head2}`}>{this.state.count}</h1>
            <button onClick={this.Handlestate} className={`btn1 ${style.btn1}`}>Increament</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.Decrement} className={`btn2 ${style.btn2}`}>Decreament</button><br/><br/>            
            <button className={`btn3 ${style.btn3}`}>Reset</button>
            </div> 
            </center> 
        </>
      
    )
  }
}

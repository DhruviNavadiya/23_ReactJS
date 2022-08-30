import React, { Component } from "react";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            pass:"",
            Cpass:"",
        };
    }
    handlerEmail=(event)=>{
        this.setState({
            email:event.target.value,
        });
    };
    handlerPass=(event)=>{
        this.setState({
            pass:event.target.value,
        });
    };
    handlerCpass=(event)=>{
        this.setState({
            Cpass:event.target.value,
        });
    };
    handlerSubmit=(event)=>{
        alert(`${this.state.email} ${this.state.pass} ${this.state.Cpass}`)
        event.preventDefault();
    };
    render()
    {
            return(
                <form onSubmit={this.handlerSubmit}>
                    <center>
                        <h3>Sign Up</h3>
                        <div>
                            <label>
                                Enter Your Email Id :
                            </label>
                            <input type="email" name="" id=""
                                value={this.state.email}
                                onChange={this.handlerEmail}
                                required
                            />
                        </div>
                        <br/>
                        <div>
                            <label>
                                Enter Your Password :
                            </label>
                            <input type="password" name="" id=""
                                value={this.state.pass}
                                onChange={this.handlerPass}
                                required
                            />
                        </div>
                        <br/>
                        <div>
                            <label>
                                Enter Your Confirm Password :
                            </label>
                            <input type="password" name="" id=""
                                value={this.state.Cpass}
                                onChange={this.handlerCpass}
                                required
                            />
                        </div>
                        <br/>
                        <button type="submit">Submit</button>
                    </center>
                </form>
            )
        }
}
export default SignUp;
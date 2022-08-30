import{Component}from "react";

class LyfCycle extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log('Comp init')
    }
    handle=()=>{
        this.setState({
            count:10
        })
    }
    componentDidMount(){
        console.log('Component didMount.....')
    }
    render(){
        console.log('com render')
        return<>
        {this.state.count}
        <button onClick={this.handle}>Click</button>
        </>
    }
    componentDidUpdate(){
        console.log('Component did update....')
    }
}
export default LyfCycle
import { Component } from "react";

class Task5 extends Component{
    render(){
        const staticText = "Hello from Class Component!"
        return(
            <>
            <h1 style={{textAlign:'center'}}>Task 5</h1>
            <h2 style={{textAlign:'center'}}>{staticText}</h2>
            <hr/>
            </>
        )
    }
}

export default Task5
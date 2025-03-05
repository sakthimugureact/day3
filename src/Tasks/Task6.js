import { Component } from "react";

class Task6 extends Component {
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Task 6</h1>
                <First/>
                <Second/>
                <hr/>
            </>
        )
    }
}

class First extends Task6 {
    render() {
        const firstStatic = "This is first class component"
        return (
            <>
                <h2 style={{ textAlign: 'center' }}>{firstStatic}</h2>
            </>
        )
    }
}

class Second extends Task6 {
    render() {
        const secondStatic = "This is second class component"
        return (
            <>
                <h2 style={{ textAlign: 'center' }}>{secondStatic}</h2>
            </>
        )
    }
}


export default Task6
import React, { Component } from 'react'
import '../App.css'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            value:0,
            message: "Hello World"
        }

    }

    render() {
        return (
            <div className="home">
                <p>{this.state.value}</p>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Home

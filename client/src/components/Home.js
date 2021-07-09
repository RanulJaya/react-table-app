import React, { Component } from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello World!',
        }
    }

    render() {
        return (
            <div className="home">
                <Card style={{ width: '30%', margin: 'auto' }}>
                    <Card.Body>{this.state.message}</Card.Body>
                    <Card.Body>
                        This is a website where you can search software
                        engineering methodologies which can be used for research
                        purposes. Go to the search link to search the method.
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home

import './App.css'
import './components/Book'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Book from './components/Book.js'
import Home from './components/Home.js'
import React from 'react'
import NavBar from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
    return (
        <Router>
            
            <Navbar bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>SEEDS</Navbar.Brand>
                </LinkContainer>
                <NavBar />
            </Navbar>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <Book />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App

import './App.css'
import './components/Book'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Book from './components/Book.js'
import Home from './components/Home.js'
import React from 'react'
import NavBar from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" >
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

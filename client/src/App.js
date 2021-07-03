import './App.css'
import './components/Book'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Book from './components/Book.js'
import Home from './components/Home.js'
import React from 'react'
import NavBar from './components/Navbar.js'

function App() {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <Book/>
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}

export default App

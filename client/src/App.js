import './App.css'
import './components/Book'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Book from './components/Book'
import Home from './components/Home'
import React, { Component } from 'react'
import NavBar from './components/Navbar'

function App() {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Book} />
            </div>
        </Router>
    )
}

export default App

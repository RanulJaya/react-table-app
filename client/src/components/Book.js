import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import List from '../components/List.js'

class book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            sort: 'title',
            searchQuery: '',
        }
    }
    componentDidMount() {
        axios
            //get all books
            .get('https://cise-app.herokuapp.com/api/books')
            .then((res) => {
                this.setState({
                    books: res.data,
                })
            })
            .catch((err) => {
                console.log('Error')
            })
    }

    render() {
        const books = this.state.books

        return (
            <div className="book">
                <table id="myTable">
                    <thead>
                        <List bookData = {books}/>
                    </thead>
                 
                </table>
            </div>
        )
    }
}

export default book

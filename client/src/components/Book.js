import React, { Component, useState } from 'react'
import '../App.css'
import axios from 'axios'
import List from '../components/List.js'
import Search from '../components/Search'

class book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            sort: 'title',
            searchTerm: '',
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

        const sendData = (index) => {
            if (index != '') {
                const click = document.getElementById('buttonClick')

                click.addEventListener('click', () => {
                    this.setState({
                        searchTerm: index,
                    })
                })
            }
        }

        return (
            <div className="book">
                <Search sendData={sendData} />
                <button id="buttonClick">search</button>
                <table id="myTable">
                    <thead>

                        <List bookData={books} searchTerm={this.state.searchTerm} />
                    </thead>
                </table>
            </div>
        )
    }
}

export default book

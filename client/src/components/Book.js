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
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>SE Claim</th>
                            <th>Claim</th>
                            <th>Stregth of Evidence</th>
                        </tr>

                        {books.map((article) => (
                            <tr>
                            <td>{article.title}</td>
                            <td>{article.author}</td>
                            <td>{article.year}</td>
                            <td>{article.method}</td>
                            <td>{article.claim}</td>
                            <td>{article.strength}</td>
                            </tr>
                        ))}
                    </thead>
                 
                </table>
            </div>
        )
    }
}

export default book

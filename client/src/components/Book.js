import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import List from '../components/List.js'
import Search from '../components/Search'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'

class book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            sort: 'title',
            searchTerm: '',
            option: '',
            optionState: false,
        }
    }
    componentDidMount() {
        axios
            //get all books
            .get('https://react-app-table-prod.herokuapp.com/api/books')
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

        const sendData = (index, opt) => {
            if (index !== '') {
                const click = document.getElementById('buttonClick')

                click.addEventListener('click', () => {
                    this.setState({
                        searchTerm: index,
                        option: opt,
                        optionState: true,
                    })
                })
            } else {
                const click = document.getElementById('buttonClick')

                if (click === null) {
                    this.setState({ optionState: false })
                } else {
                    click.addEventListener('click', () => {
                        this.setState({
                            searchTerm: index,
                            option: opt,
                            optionState: false,
                        })
                    })
                }
            }
        }

        return (
            <div className="book">
                <Navbar className="bg-light justify-content-between">
                    <Form inline style={{ alignContent: 'center' }}>
                        <Search sendData={sendData} />
                        <Button variant="outline-success" id="buttonClick" style={{ position: 'absolute', right: '480px', top: '8px' }}>search</Button>
                    </Form>
                </Navbar>
                <Table striped bordered hover size>
                    {
                        <List
                            bookData={books}
                            searchTerm={this.state.searchTerm}
                            option={this.state.option}
                        />
                    }
                </Table>
            </div>
        )
    }
}

export default book

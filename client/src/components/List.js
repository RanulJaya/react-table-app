import React, { Component, useState } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }
    }

    render() {
        const data = this.props.bookData
        const searchData = this.props.searchTerm
        this.state.searchTerm = searchData

        function articles(articleVar) {
            if (articleVar === '') {
                return '-'
            }

            if (articleVar === null) {
                return '-'
            } else {
                return articleVar
            }
        }

        return (
            <div>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>SE Claim</th>
                <th>Claim</th>
                <th>Stregth of Evidence</th>

                {data
                    .filter((article) => {
                        if (this.state.searchTerm == '') {
                            return article
                        } else if (
                            article.title
                                .toLowerCase()
                                .includes(this.state.searchTerm.toLowerCase())
                        ) {
                            return article
                        }
                    })
                    .map((article) => (
                        <tr>
                            <td>{article.title}</td>
                            <td>{articles(article.author)}</td>
                            <td>{articles(article.year)}</td>
                            <td>{article.method}</td>
                            <td>{article.claim}</td>
                            <td>{article.strength}</td>
                        </tr>
                    ))}
            </div>
        )
    }
}

export default List

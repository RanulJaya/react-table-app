import React, { Component } from 'react'

class List extends Component {
    render() {
        const data = this.props.bookData

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
                <th>test</th>

                {data.map((article) => (
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

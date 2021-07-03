import React, { Component } from 'react'

class List extends Component {
    render() {
        const data = this.props.bookData
        return (
            <div>
                <td>{data}</td>
                <td>sdf</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </div>
        )
    }
}

export default List

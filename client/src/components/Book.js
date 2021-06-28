import React, { Component } from 'react'
import '../App.css'

class book extends Component {
    render() {
        return <div className="book">
               <table id="myTable">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>SE Claim</th>
                <th>Claim</th>
                <th>Stregth of Evidence</th>
              </tr>
                <tr>
                    <td>cell 1</td>
                    <td>cell 2</td>
                    <td>cell 3</td>
                </tr>

            </table>
        </div>
    }
}

export default book

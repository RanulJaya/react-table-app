import React, { Component } from 'react'
import '../App.css'
import axios from "axios"

class book extends Component {
   
    componentDidMount(){
        axios
        //get all books
        .get("https://cise-app.herokuapp.com/api/books")
        .then((res) => {
          this.setState({
            books: res.data,
          });
        })
        .catch((err) => {
          console.log("Error");
        });

    }

    render() {
        return (<div className="book">
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
                <tr>
                    <td>cell 1</td>
                    <td>cell 2</td>
                    <td>cell 3</td>
                </tr>
                </thead>
            </table>
        </div>
        )}
}

export default book

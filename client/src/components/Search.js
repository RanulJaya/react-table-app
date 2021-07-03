import { useState } from "react"

const Search = ({sendData}) => {

const [searchTerm, setSearch] = useState("")

    function mySearch() {

            return (

                <input
                    type="text"
                    id="myinput"
                    placeholder="Search"
                    onChange={(e) =>{
                        setSearch(e.target.value)
                    }}
                />
            )
    }

    return (
        <div>
            <select id="searchOption">
                <option value="title" selected>
                    Title
                </option>
                <option value="author">Author</option>
                <option value="year">Year</option>
                <option value="claim">SE Claim</option>
            </select>
            {mySearch()}
            {sendData(searchTerm)}

        </div>
    )
}

export default Search

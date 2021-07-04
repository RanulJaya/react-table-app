import { useEffect, useState } from 'react'

const Search = ({ sendData }) => {
    const [searchTerm, setSearch] = useState('')
    const [selectValue, setValue] = useState('')

    function mySearch() {
        return (
            <input
                type="text"
                id="myinput"
                placeholder="Search"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
        )
    }

    return (
        <div>
            <select value = {selectValue}
             onChange = {(e) => setValue(e.target.value)}
            >
                <option value="PickOpt" selected>Pick Option</option>
                <option value="title">
                    Title
                </option>
                <option value="author">Author</option>
                <option value="year">Year</option>
                <option value="claim">SE Claim</option>
            </select>

            {mySearch()}
            {sendData(searchTerm, selectValue)}

        </div>
    )
}

export default Search

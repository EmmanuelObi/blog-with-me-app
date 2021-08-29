import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <form className="form-inline mx-auto">
                 <input
                      className="form-control mx-auto"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                />
            </form>
        </div>
    )
}

export default SearchBar

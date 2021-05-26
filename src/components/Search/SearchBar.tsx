import "./SearchBar.css";
import React from "react";


function SearchBar(props) {
    return (
        <div className="component-search-input">
            <input
                data-testid={"search-input-id"}
                type="text"
                id="action-search"
                placeholder="Search Action"
                maxLength= {30}
                minLength= {2}
                onChange={event => props.handleSearch(event.target.value)}
            />
        </div>
    )
}

export default SearchBar



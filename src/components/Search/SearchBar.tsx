import "./SearchBar.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";


function SearchBar(props) {
    return (
        <div className="component-search-input">
            <div className="input-container">
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
            <button
                type="submit"
                onClick={() => props.handleSubmit()}
                value="Search">
            </button>
        </div>
    )
}

export default SearchBar



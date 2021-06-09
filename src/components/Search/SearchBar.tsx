import "./SearchBar.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";


function SearchBar(props) {
    return (
        <div className="component-search-input">
            <div className="input-container" id={'test-div'}>
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
                data-testid={"search-button-id"}
                type="submit"
                id={'search-button'}
                onClick={() => props.handleSubmit()}
                value="Search">
            </button>
        </div>
    )
}

export default SearchBar



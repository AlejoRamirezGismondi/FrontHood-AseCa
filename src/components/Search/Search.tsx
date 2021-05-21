import React from 'react';
import "./Search.css";
import SearchBar from "./SearchBar";
import actions from "./action_data"

const Search = () => {

    function viewDetails(id) {
        console.log(id)
    }

    const actionList = actions.map((item) =>
        <div className="action-card" key={item.id} onClick={() => viewDetails(item.id)}>
            <h2 className="action-card-title">{item.action_name} ({item.symbol})</h2>
            <p className="action-card-company">{item.company_name}</p>
            <p className="action-card-price">${item.price}</p>
        </div>
    )
    return (
        <div>
            <SearchBar/>
            <div className="container">
                {actionList}
            </div>
        </div>
    );
}

export default Search

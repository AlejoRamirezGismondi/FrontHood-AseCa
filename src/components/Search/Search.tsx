import React, {Component, useEffect, useRef} from "react";
import "./Search.css";
import SearchBar from "./SearchBar";
import actions from "./action_data"

class Search extends Component {

    actionList;
    state = {
        showMessage: false,
    };

    viewDetails(id) {
        console.log(id)
    }

    showActionList() {
        if(actions.length > 0){
            this.state.showMessage = false
            this.actionList = actions.map((item) =>
                <div className="action-card" key={item.id} onClick={() => this.viewDetails(item.id)}>
                    <h2 className="action-card-title">{item.action_name} ({item.symbol})</h2>
                    <p className="action-card-company">{item.company_name}</p>
                    <p className="action-card-price">${item.price}</p>
                </div>
            )
        } else {
            this.state.showMessage = true
        }
        return this.actionList
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <div className="container">
                    {this.showActionList()}
                </div>
                <div className="search-unknown"
                     style={{visibility: this.state.showMessage ? 'visible' : 'hidden' }} >
                    Unable to find the action you were looking for
                </div>
            </div>
        )
    }
}

export default Search

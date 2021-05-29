import React, {Component} from "react";
import "./Search.css";
import actions from "./action_data"
import {Link} from "react-router-dom"
import Child from "./SearchBar";

class Search extends Component {

    actionList;
    state = {
        showMessage: false,
        searchInput: ""
    };

    viewDetails(id) {
        console.log(id)
    }

    filterBySearchInput(input){
        if(input.length > 1 && input.length < 30){
            this.setState({ searchInput: input });
        } else {
            this.setState({ searchInput: "" });
        }
    }

    showActionList() {
        if(actions.length > 0){
            this.state.showMessage = false
            this.actionList = actions.filter(
                item =>
                    item.symbol.includes(this.state.searchInput) ||
                    item.company_name.includes(this.state.searchInput) ||
                    item.action_name.includes(this.state.searchInput)
            ).map((item) =>
                <Link to={`/action_detail/${item.id}`} style={{ color: 'inherit', textDecoration: 'none' }} key={item.id}>
                    <div className="action-card" data-testid={"action-card-id-"+item.id} key={item.id} onClick={() => this.viewDetails(item.id)}>
                        <h2 className="action-card-title">{item.action_name} ({item.symbol})</h2>
                        <p className="action-card-company">{item.company_name}</p>
                        <p className="action-card-price">${item.price}</p>
                    </div>
                </Link>
            )
        } else {
            this.state.showMessage = true
        }
        return this.actionList
    }

    render() {
        return (
            <div>
                <Child handleSearch={input => this.filterBySearchInput(input)}/>
                <div className="container" data-testid={"search-container-id"}>
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

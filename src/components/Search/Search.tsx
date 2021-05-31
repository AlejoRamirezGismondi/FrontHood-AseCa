import React, {Component} from "react";
import "./Search.css";
import mock_actions from "./fake_action_data"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";
import {get} from "../http"
import {BrowserRouter} from 'react-router-dom';

class Search extends Component {


    constructor(props) {
        super(props);

        this.state = {
            showMessage: false,
            searchInput: "",
            actions: mock_actions.actions_mock
        };
    }
    actionList;

    state = {
        showMessage: false,
        searchInput: "",
        actions: mock_actions.actions_mock
    };

    viewDetails(id) {
        console.log(id)
    }

    handleSearch(){
        this.fakeSearchStocks()
        // @ts-ignore
        console.log(this.state.searchInput)
    }

    filterBySearchInput(input){
        if(input.length > 1 && input.length <= 30){
            this.setState({ searchInput: input });
        } else {
            this.setState({ searchInput: "" });
        }
    }

    searchStocks(){
        // @ts-ignore
        get(this.state.searchInput)
            .then(res => {
                this.updateActions(res)
            })
    }

    fakeSearchStocks(){
        console.log("Fake Search Stocks")
        this.updateActions(mock_actions.actions_mock_search_api)
    }

    showActions(){
        this.actionList = this.state.actions.map((item) =>
            <Link to={`/action_detail/${item["1. symbol"]}`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  key={item["1. symbol"]}>
                <div className="action-card" data-testid={"action-card-id-"+item["1. symbol"]} key={item["1. symbol"]}
                     onClick={() => this.viewDetails(item["1. symbol"])}>
                    <h2 className="action-card-title">{item["1. symbol"]}</h2>
                    <p className="action-card-company">{item["2. name"]}</p>
                    <p className="action-card-price">Score {item["9. matchScore"]}</p>
                </div>
            </Link>
        )
    }


    /*
    * Mock function, shows the actions filtered by the search bar input
    * TODO swap with showActions
    */
    showFilteredActions(){
        this.actionList = this.state.actions.filter(
            item =>
                item["symbol"].includes(this.state.searchInput) ||
                item["company_name"].includes(this.state.searchInput) ||
                item["action_name"].includes(this.state.searchInput)
        ).map((item) =>
            <Link to={`/action_detail/${item["id"]}`} style={{ color: 'inherit', textDecoration: 'none' }} key={item["id"]}>
                <div className="action-card" data-testid={"action-card-id-"+item["id"]} key={item["id"]} onClick={() => this.viewDetails(item["id"])}>
                    <h2 className="action-card-title">{item["action_name"]} ({item["symbol"]})</h2>
                    <p className="action-card-company">{item["company_name"]}</p>
                    <p className="action-card-price">${item["price"]}</p>
                </div>
            </Link>
        )
    }

    updateActions(data){
        this.setState({ actions: data.bestMatches })

    }

    showActionList() {

        if(this.state.actions.length > 0){
            this.state.showMessage = false
            this.showActions()
        } else {
            this.state.showMessage = true
        }
        return this.actionList
    }

    render() {
        return (
            <div>
                <SearchBar handleSearch={input => this.filterBySearchInput(input)}
                           handleSubmit={() => this.handleSearch()}/>
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

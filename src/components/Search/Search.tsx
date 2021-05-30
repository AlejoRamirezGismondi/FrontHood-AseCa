import React, {Component} from "react";
import "./Search.css";
import mock_actions from "./action_data"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";
import {get} from "../http"

class Search extends Component {

    actionList;

    state = {
        showMessage: false,
        searchInput: "",
        actions: mock_actions.actions_mock_search_api
    };

    viewDetails(id) {
        console.log(id)
    }

    filterBySearchInput(input){
        if(input.length > 1 && input.length <= 30){
            this.setState({ searchInput: input });
        } else {
            this.setState({ searchInput: "" });
        }
    }

    searchStocks(){
        get(this.state.searchInput)
            .then(res => {
                this.updateActions(res)
            })
    }

    fakeSearchStocks(){
        console.log("Fake Search Stocks")
        const apiResponse = {
            "bestMatches": [
                {
                    "1. symbol": "TESO",
                    "2. name": "Tesco Corporation USA",
                    "3. type": "Equity",
                    "4. region": "United States",
                    "5. marketOpen": "09:30",
                    "6. marketClose": "16:00",
                    "7. timezone": "UTC-04",
                    "8. currency": "USD",
                    "9. matchScore": "0.8889"
                },
                {
                    "1. symbol": "TSCO.LON",
                    "2. name": "Tesco PLC",
                    "3. type": "Equity",
                    "4. region": "United Kingdom",
                    "5. marketOpen": "08:00",
                    "6. marketClose": "16:30",
                    "7. timezone": "UTC+01",
                    "8. currency": "GBX",
                    "9. matchScore": "0.7273"
                },
                {
                    "1. symbol": "TSCDF",
                    "2. name": "Tesco plc",
                    "3. type": "Equity",
                    "4. region": "United States",
                    "5. marketOpen": "09:30",
                    "6. marketClose": "16:00",
                    "7. timezone": "UTC-04",
                    "8. currency": "USD",
                    "9. matchScore": "0.7143"
                },
                {
                    "1. symbol": "TSCDY",
                    "2. name": "Tesco plc",
                    "3. type": "Equity",
                    "4. region": "United States",
                    "5. marketOpen": "09:30",
                    "6. marketClose": "16:00",
                    "7. timezone": "UTC-04",
                    "8. currency": "USD",
                    "9. matchScore": "0.7143"
                },
                {
                    "1. symbol": "TCO.DEX",
                    "2. name": "Tesco PLC",
                    "3. type": "Equity",
                    "4. region": "XETRA",
                    "5. marketOpen": "08:00",
                    "6. marketClose": "20:00",
                    "7. timezone": "UTC+02",
                    "8. currency": "EUR",
                    "9. matchScore": "0.7143"
                },
                {
                    "1. symbol": "TCO.FRK",
                    "2. name": "Tesco PLC",
                    "3. type": "Equity",
                    "4. region": "Frankfurt",
                    "5. marketOpen": "08:00",
                    "6. marketClose": "20:00",
                    "7. timezone": "UTC+02",
                    "8. currency": "EUR",
                    "9. matchScore": "0.7143"
                }
            ]
        }
        this.updateActions(apiResponse)
    }

    showActions(){
        console.log("Show Actions")
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
        console.log("Show Actions")
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
        console.log(this.state.actions)
        this.setState({ actions: data.bestMatches })

    }

    showActionList() {
        console.log("Show Action List")
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
                handleSubmit={() => this.fakeSearchStocks()}/>
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

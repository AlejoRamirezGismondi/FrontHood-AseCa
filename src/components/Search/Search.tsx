import React, {Component} from "react";
import "./Search.css";
import mock_actions from "./fake_action_data"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";
import {get} from "../http"

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
    searchUrl = "search/";

    state = {
        showMessage: false,
        searchInput: "",
        actions: mock_actions.actions_mock
    };

    viewDetails(id) {
        console.log(id)
    }

    handleSearch(){
        console.log(this.state.searchInput)
        if(this.state.searchInput == ""){
            this.setState({showMessage: true})
        } else {
            get(this.searchUrl + this.state.searchInput)
                .then(res => {
                    this.updateActions(res)
                })
        }

    }

    filterBySearchInput(input){
        if(input.length > 1 && input.length <= 30){
            this.setState({ searchInput: input });
        } else {
            this.setState({ searchInput: "" });
        }
    }


    showActions(){
        return this.actionList = this.state.actions.map((item) =>
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

    updateActions(data){
        this.setState({ actions: data.bestMatches })
        if(this.state.actions.length > 0){
            if(this.state.showMessage === true){
                this.setState({showMessage: false})
            }
        } else {
            if(this.state.showMessage === false){
                this.setState({showMessage: true})
            }
        }
    }

    render() {
        return (
            <div>
                <SearchBar handleSearch={input => this.filterBySearchInput(input)}
                           handleSubmit={() => this.handleSearch()}/>
                <div className="search-unknown"
                     style={{visibility: this.state.showMessage ? 'visible' : 'hidden' }} >
                    Unable to find the action you were looking for
                </div>
                <div className="container" data-testid={"search-container-id"}>
                    {this.showActions()}
                </div>
            </div>
        )
    }
}

export default Search

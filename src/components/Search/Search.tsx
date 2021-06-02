import React, {Component} from "react";
import "./Search.css";
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";
import {get} from "../http"

class Search extends Component {


    state = {
        showErrorMessage: false,
        errorMessage: "",
        searchInput: "",
        actions: []
    };
    actionList;
    searchUrl = "search/";

    constructor(props) {
        super(props);

        this.state = {
            showErrorMessage: false,
            errorMessage: "",
            searchInput: "",
            actions: []
        };
    }




    viewDetails(id) {
        console.log(id)
    }

    fetchData(keyword){
        get(keyword)
            .then(res => {
                this.updateActions(res)
            })
            .catch(error => {
                this.setState({showErrorMessage: true, errorMessage: "Error RobinCopy not working"})
                console.log(error)
            })
    }

    handleSearch(){
        console.log(this.state.searchInput)

        if(this.state.searchInput == ""){
            this.setState({showErrorMessage: true, errorMessage: "Unable to find the action you were looking for"})
        } else {
            this.fetchData(this.searchUrl + this.state.searchInput)
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
            if(this.state.showErrorMessage === true){
                this.setState({showErrorMessage: false, errorMessage: "Unable to find the action you were looking for"})
            }
        } else {
            if(this.state.showErrorMessage === false){
                this.setState({showErrorMessage: true, errorMessage: "Unable to find the action you were looking for"})
            }
        }
    }

    render() {
        return (
            <div>
                <SearchBar handleSearch={input => this.filterBySearchInput(input)}
                           handleSubmit={() => this.handleSearch()}/>
                <div className="search-unknown"
                     style={{visibility: this.state.showErrorMessage ? 'visible' : 'hidden' }} >
                    {this.state.errorMessage}
                </div>
                <div className="container" data-testid={"search-container-id"}>
                    {this.showActions()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.fetchData(this.searchUrl + 'tesco')
    }
}

export default Search

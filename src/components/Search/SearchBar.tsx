import "./SearchBar.css";

function handleSearch(){
    console.log("Do smth")
}

const SearchBar = () => (
    /*<div>
        <form onSubmit={handleSearch}>

        </form>
    </div>*/
    <div className="component-search-input">
        <input
            type="text"
            id="action-search"
            placeholder="Search Action"
            maxLength= {30}
            minLength= {2}
            onChange={handleSearch}
        />
    </div>
);

export default SearchBar;

import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";

const SearchBar = (props) => {
  return (
    <div className="input-group">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search for Videos!"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <Link to="/search">
        <button type="button" className="btn btn-outline-primary">
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;

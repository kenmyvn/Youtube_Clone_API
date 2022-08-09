import React, { useState } from "react";
import "./SearchBar.css";
import { Link, renderMatches } from "react-router-dom";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";

const SearchBar = (props) => {
  const [search, updateSearch] = useState();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search for Videos!"
        aria-label="Search"
        aria-describedby="search-addon"
        value={search}
        onChange={(event) => updateSearch(event.target.value)}
      />
      <Link to="/search/:search">
        <button type="button" className="btn btn-outline-primary">
          Search
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;

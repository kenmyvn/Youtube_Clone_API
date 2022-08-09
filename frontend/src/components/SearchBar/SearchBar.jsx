import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";

const SearchBar = (props) => {
  const [search, updateSearch] = useState();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const encoded = encodeURIComponent(search);
    navigate(`/search/${search}`);
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
      <button className="btn btn-outline-primary">Search</button>
    </form>
  );
};

export default SearchBar;

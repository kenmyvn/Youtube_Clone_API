import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div class="input-group">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search for Videos!"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="button" class="btn btn-outline-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

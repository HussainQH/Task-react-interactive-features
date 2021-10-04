import React from "react";
// Styling

const SearchBar = (props) => (
  <input
    className="searchBar"
    onChange={(event) => props.setQuery(event.target.value)}
    placeholder="Search for a cookie name"
  />
);

export default SearchBar;

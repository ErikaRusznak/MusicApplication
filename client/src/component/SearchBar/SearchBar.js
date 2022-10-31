import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  return (
    <>
      <input
        type="search"
        results="0"
        className="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      ></input>
      <button type="submit" class="searchButton">
        <SearchIcon className="iconsearch"/>
      </button>
    </>
  );
};

export default SearchBar;

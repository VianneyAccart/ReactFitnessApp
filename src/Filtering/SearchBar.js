import React from "react";
import PropTypes from "prop-types";

function SearchBar(props) {
  const { searchValue, searchValueChange } = props;
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
      <div className="form-floating">
        <input
          value={searchValue}
          type="text"
          className="form-control"
          placeholder="Type here..."
          onChange={(event) => searchValueChange(event.target.value)}
        />
        <label htmlFor="floatingInputGroup1">Rechercher...</label>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchValueChange: PropTypes.func.isRequired,
};

export default SearchBar;

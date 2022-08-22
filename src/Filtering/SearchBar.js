import React from "react";
import PropTypes from "prop-types";

export default function SearchBar(props) {
  const { searchValue, searchValueChange } = props;
  return (
    <div className="input-group me-2">
      <span className="input-group-text" id="basic-addon1">
        <i className="bi bi-search"></i>
      </span>
      <input
        value={searchValue}
        type="text"
        className="form-control form-control-sm"
        placeholder="Rechercher..."
        onChange={(event) => searchValueChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchValueChange: PropTypes.func.isRequired,
};

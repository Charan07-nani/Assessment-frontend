import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search" />
      <button className="filter-button">Filter</button>
    </div>
  );
};
export default SearchBar;
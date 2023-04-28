import React, { useState } from 'react';
import {
    FaSearch,
  } from "react-icons/fa";

const SearchBar = ({ countries }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />
    <FaSearch className='search-icon'/>
    </div>
  );
};

export default SearchBar;

// Taken from https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js 
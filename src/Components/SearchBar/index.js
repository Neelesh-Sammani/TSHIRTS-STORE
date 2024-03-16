import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './search.css';

const SearchBar = ({ handleDrawerOpen, isLargeScreen, initialProductsData, setProductsData, setNoDataFound }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchValue(query);

    if (query === '') {
      setProductsData(initialProductsData);
      setNoDataFound(false);
      return;
    }

    const filteredProducts = initialProductsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query) ||
        product.color.toLowerCase().includes(query)
    );

    setProductsData(filteredProducts);

    // if (filteredProducts.length === 0) {
    //   console.log('No data found');
    // }
    setNoDataFound(filteredProducts.length === 0);
  };


  return (
    <div className="searchBar">
      <div>
        <TextField
          id="standard-basic"
          label="Search for products..."
          variant="standard"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <button className="search">
        <SearchIcon />
      </button>
      {!isLargeScreen ? (
        <button className="filterButton" onClick={handleDrawerOpen}>
          <FilterAltIcon />
        </button>
      ) : null}
    </div>
  );
};

export default SearchBar;
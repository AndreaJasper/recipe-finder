import React, { useState } from 'react';
import { fetchRecipes } from '../api/edamamApi';
import PropTypes from 'prop-types';

function SearchBar({ setRecipes }) {
  console.log('setRecipes prop:', setRecipes); // This should log a function
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const recipes = await fetchRecipes(query);
    console.log('Fetched recipes:', recipes);
    setRecipes(recipes);  // Ensure this is the right function call
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;


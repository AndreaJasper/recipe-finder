import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]); // Correctly using useState

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar setRecipes={setRecipes} /> {/* Pass setRecipes as a prop */}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe.js';

const App = () => {

  const APP_ID = "7ebe31e1";
  const APP_KEY = "e3e4a2a969825b88484787db4cb34c7a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e =>
    setSearch(e.target.value);
}

return (
  <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text" value={search} onChange={} />
      <button
        className="search-button"
        type="submit">Search</button>
    </form>
    {recipes.map(recipe => (
      <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
      />
    ))}

  </div>



);
    };

export default App;

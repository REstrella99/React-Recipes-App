import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "7ebe31e1";
  const APP_KEY = "e3e4a2a969825b88484787db4cb34c7a";

  useEffect(() => {

  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          className="search-button"
          type="submit">Search</button>
      </form>
    </div>



  );
};

export default App;

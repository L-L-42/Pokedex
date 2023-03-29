import React from "react";
import PokemonCard from "./components/Pokemoncard.jsx";
import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

const App = () => {
  return (
    <div className="pokemoncard">
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
};

//const App = () => {
//return (
//<div className='pokemoncard'>
//<PokemonCard pokemon = {pokemonList[0]} />
//</div>
//);
//};

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default App;

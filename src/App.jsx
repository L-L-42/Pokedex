import React from "react";
import PokemonCard from "./components/Pokemoncard.jsx";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  const nextPokemon = () => {
    setCurrentPokemonIndex(
      currentPokemonIndex === pokemonList.length - 1
        ? 0
        : currentPokemonIndex + 1
    );
  };

  const previousPokemon = () => {
    setCurrentPokemonIndex(
      currentPokemonIndex === 0
        ? pokemonList.length - 1
        : currentPokemonIndex - 1
    );
  };

  return (
    <div className="pokemoncard">
      {currentPokemonIndex > 0 && (
        <button className="button" onClick={previousPokemon}>
          Précédent
        </button>
      )}
      {currentPokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Suivant</button>
      )}
      <PokemonCard pokemon={pokemonList[currentPokemonIndex]} />
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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;

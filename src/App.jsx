import React from "react";
import PokemonCard from "./components/Pokemoncard.jsx";
import { useState } from "react";
import Navbar from "./components/NavBar.jsx";
import "./App.css";
import { useEffect } from "react";
const App = () => {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);
  return (
    <div className="pokemoncard">
      <Navbar
        setCurrentPokemonIndex={setCurrentPokemonIndex}
        currentPokemonIndex={currentPokemonIndex}
        o
        pokemonList={pokemonList}
      />
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

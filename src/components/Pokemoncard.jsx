import React from 'react';

//const PokemonCard = () => {
 // const pokemon = pokemonList [0];

 // return (
    
   // <figure>
     // {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="pokemon.name" /> : <p>???</p>}
      //<figcaption>{pokemon.name}</figcaption>
    //</figure>
  //);
//};

function PokemonCard (props){
  let pokemon = props.pokemon;

  let condition = pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>;

  return <figure> {condition}
  <figcaption>{pokemon.name}</figcaption>
  </figure>;
  
}

export default PokemonCard;
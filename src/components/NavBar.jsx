function Navbar({ currentPokemonIndex, pokemonList, setCurrentPokemonIndex }) {
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
    <nav>
      {currentPokemonIndex > 0 && (
        <button className="button" onClick={previousPokemon}>
          Précédent
        </button>
      )}
      {currentPokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Suivant</button>
      )}
    </nav>
  );
}

export default Navbar;

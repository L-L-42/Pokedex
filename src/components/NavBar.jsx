function Navbar({ pokemonList, setCurrentPokemonIndex }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => setCurrentPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;

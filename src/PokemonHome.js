import { useState, useRef } from "react";
import PokemonInfo from "./PokemonInfo";
import useAxios from "./useAxios";

const PokemonHome = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const url = "https://pokeapi.co/api/v2/pokemon";

  const { data, isLoading, error } = useAxios(url, pokemon);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(inputRef.current.value.toLowerCase());
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Pokemon Name or Dex Number Here"
          ref={inputRef}
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && (
        <div className="error-msg">Please input a valid name or dex number</div>
      )}

      {data && <PokemonInfo pokeData={data} />}

      {isLoading && <div className="loading-page">Loading...</div>}
    </div>
  );
};

export default PokemonHome;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "./useAxios";

const PokemonList = () => {
  const [page, setPage] = useState(1);
  const limit = 100;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
    (page - 1) * limit
  }`;

  const upper = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const { data, isLoading, error, count } = useAxios(url);
  console.log(data);

  return (
    <div className="pokemonList">
      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      <div className="pagination">
        {/* Previous */}
        {page !== 1 && (
          <button onClick={() => setPage((prev) => prev - 1)}>
            {page - 1}
          </button>
        )}

        {/* Current */}
        <button className="currentBtn">{page}</button>

        {/* Next */}
        {page < Math.ceil(count / limit) && (
          <button onClick={() => setPage((prev) => prev + 1)}>
            {page + 1}
          </button>
        )}

        {/* Next Again */}
        {page + 1 < Math.ceil(count / limit) && (
          <button onClick={() => setPage((prev) => prev + 2)}>
            {page + 2}
          </button>
        )}

        {/* Next Again Again */}
        {page + 2 < Math.ceil(count / limit) && (
          <button onClick={() => setPage((prev) => prev + 3)}>
            {page + 3}
          </button>
        )}

        {/* Next Again Again */}
        {page + 3 < Math.ceil(count / limit) && (
          <button onClick={() => setPage((prev) => prev + 4)}>
            {page + 4}
          </button>
        )}
      </div>

      <ul>
        {data &&
          data.results.map((pokemon) => {
            return (
              <li key={pokemon.url} className="pokemonChild">
                <p>{upper(pokemon.name)}</p>
                <Link to={`/pokemon/${pokemon.name}`}>Go</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PokemonList;

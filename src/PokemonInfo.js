import { Link } from "react-router-dom";

export const upper = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const PokemonInfo = ({ pokeData }) => {
  return (
    <div className="pokemonChild info-container">
      <h1>
        #{("00" + pokeData.id).substr(-3)} {upper(pokeData.name)}
      </h1>
      <p>
        {pokeData.types
          .map((obj) => {
            return upper(obj.type.name);
          })
          .join(" and ")}{" "}
        Type Pokemon
      </p>
      <img src={pokeData.sprites.front_default} alt={pokeData.name} />
      <Link to={`/pokemon/${pokeData.name}`}>Go</Link>
    </div>
  );
};

export default PokemonInfo;

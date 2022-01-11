import { useHistory, useParams } from "react-router";
import useAxios from "./useAxios";

const API = {
  dummyBlogs: "http://localhost:8000/blogs",
  pokemon: "https://pokeapi.co/api/v2/pokemon",
  jsonPlaceholder: "https://jsonplaceholder.typicode.com/todos",
};

const PokemonDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useAxios(API.pokemon, id);
  console.log(data);

  const caps = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const spliting = (str) => {
    const words = str.split("-");
    const wordsCaps = words.map((word) => caps(word));
    return wordsCaps.join(" ");
  };

  return (
    <div className="pokemonDetailsContainer">
      {data && (
        <div className="pokemonContainer">
          <div className="header">
            <h2>
              #{("00" + data.id).substr(-3)} {caps(data.name)}
            </h2>
            <p>
              {data.types
                .map((obj) => {
                  return caps(obj.type.name);
                })
                .join(" and ")}{" "}
              Type Pokemon
            </p>
          </div>
          <div className="images">
            <img src={data.sprites.front_default} alt={`${data.name} image`} />
            <img
              src={data.sprites.front_shiny}
              alt={`${data.name} shiny image`}
            />
          </div>

          <div className="base">
            <ul>
              <h3>Basic Information</h3>

              <li className="height">
                <p>Height</p>
                <p>{data.height}</p>
              </li>
              <li className="weight">
                <p>Weight</p>
                <p>{data.weight}</p>
              </li>
              <li className="baseExp">
                <p>Base Experience</p>
                <p>{data.base_experience}</p>
              </li>
            </ul>

            <ul>
              <h3>Abilities</h3>
              {data.abilities.map((ability) => {
                return (
                  <li key={ability.slot}>
                    <p>{caps(ability.ability.name)}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul>
            <h3>Base Stat</h3>
            {data &&
              data.stats.map((obj) => {
                return (
                  <li key={obj.stat.name}>
                    <p>{caps(obj.stat.name)}</p>
                    <p>{obj.base_stat}</p>
                  </li>
                );
              })}
          </ul>
          <ul>
            <h3>Moves</h3>
            <table>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Method</th>
                <th>Latest Version</th>
              </tr>
              {data &&
                data.moves.map((obj) => {
                  return (
                    <tr key={obj.move.name}>
                      <th>{caps(obj.move.name)} </th>
                      <th>
                        {
                          obj.version_group_details.slice(-1)[0]
                            .level_learned_at
                        }
                      </th>
                      <th>
                        {caps(
                          obj.version_group_details.slice(-1)[0]
                            .move_learn_method.name
                        )}
                      </th>
                      <th>
                        {spliting(
                          obj.version_group_details.slice(-1)[0].version_group
                            .name
                        )}
                      </th>
                    </tr>
                  );
                })}
            </table>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;

{
  /* <p>
                      Available in level{" "}
                      {obj.version_group_details.slice(-1)[0].level_learned_at}{" "}
                      in Pokemon{" "}
                      {spliting(
                        obj.version_group_details.slice(-1)[0].version_group
                          .name
                      )}{" "}
                      with{" "}
                      {
                        obj.version_group_details.slice(-1)[0].move_learn_method
                          .name
                      }
                    </p> */
}

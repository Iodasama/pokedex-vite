import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UpdatePokemon = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  }, [pokemonId]);

  const handleUpdateSubmit = (event) =>  {
    event.preventDefault();

    const name = event.target.name.value;
    const generation = event.target.generation.value;

    const json = JSON.stringify({ 
        name:name,
        generation:generation,
    });

    fetch("https://pokebuildapi.fr/api/v1/pokemon", { 
        method:"PATCH",
        body:json,
    })

};

  return (
    <section className="CreatePoke2">
      <form on onSubmit={handleUpdateSubmit}>
        <div>
          <label>
            名儿:
            <input type="text" name="nom" defaultValue={pokemon && pokemon.name} />
          </label>
        </div>

        <div>
          <label>
          初代:
            <input type="text" name="generation" defaultValue={pokemon && pokemon.apiGeneration} />
          </label>
        </div>

        <input type="submit" value="换宝可梦特性" />
      </form>
    </section>
  );
};

export default UpdatePokemon;
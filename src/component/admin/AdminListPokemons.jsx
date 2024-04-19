import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const AdminListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  const handleDeletePokemon = (event, pokemonId) => {
    console.log (pokemonId);
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId, {
      method: "DELETE",
    });
  };

  return (
    <main>
      <h2>Gérer les pokemons :</h2>

      <table>
        <tr>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
        {pokemons.map((pokemon) => {
          return (
            <tr key={pokemon.id}>
              <td>{pokemon.name}</td>
              <td><Link to ={`/admin/pokemons—update/${pokemon.id}`}>换</Link></td>
              <td>
              
                <button>Modifier</button>
                
                <button onClick={(event) => handleDeletePokemon(event, pokemon.id)}>Supprimer</button>
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
};

export default AdminListPokemons;
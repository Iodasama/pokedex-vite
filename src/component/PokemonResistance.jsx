import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const PokemonResistance= ()=> {

    const {typeres} = useParams ();
    const [pokemonsresistance, setpokemonsresistance] = useState([]);

    useEffect(()=>{fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + typeres)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
            setpokemonsresistance(data);
        });
    },[typeres]);

    console.log(pokemonsresistance)

    return (
        <section>
            {
            pokemonsresistance.map((pokemonresistance) => {
                return (
                    <div key={pokemonresistance.id}> 
                        <h2>{pokemonresistance.name}</h2>
                        <img src={pokemonresistance.image} alt={pokemonresistance.name} />
                        <ul >
                            {pokemonresistance.apiTypes.map((type)=>{
                                return(
                                <li>{type.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })
            }
        </section>
    )
}

export default PokemonResistance;
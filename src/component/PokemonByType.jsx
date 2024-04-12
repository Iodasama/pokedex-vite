import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
const PokemonByType= ()=> {
    const { type } = useParams();
    const [pokemons, setPokemons] = useState([]);

   

    useEffect(()=>{fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
    setPokemons(data);
        });

    },[]);

    return ( 
        <section> 
            <h2> Les pokemons du type {type} :</h2>
            <>
            {pokemons.map ((pokemon)=>{ 
                            return ( 
                                    <article key = {pokemon.id}>
                                    <h2> {pokemon.name}</h2>
                                    {pokemon.apiTypes.map((type)=>{
                                        return<p key ={type.name}>{type.name}</p>;
                                    })}

                                    <Link to = {`/pokemon-resistance/${pokemon.id}`}>
                                    </Link>
                                    <Link to = {`/pokemonsdetails/${pokemon.id}`}>
                                    宝可梦到了！
                                    </Link>

                                
                                    </article>
                            );
                        }
                    )
            }
            </>
                
            
        </section>
            );
};  

export default PokemonByType;


//{pokemon.apiTypes.map(type)=>{ 
    //return <p key ={type.name}>{type.name}</p>;
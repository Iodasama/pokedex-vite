import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const ListPokemons= ()=> {

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
        .then((response) => {
        return response.json();
        })
        .then((data) => {
    setPokemons(data);
        });

    },[]);

    return ( 
        <section> 
            <h2> La liste des 100 premiers pokemons (mais les vrais savent toujours qu'il y en a que 151)</h2>
            {!pokemons ? (
            <p>Pokemons loading … </p>
            ) : ( 
            <>    
            {pokemons.map ((pokemon)=>{ 
                            return ( 
                                    <article key = {pokemon.id}>
                                    <h2> {pokemon.name}</h2>
                                    
                                    {pokemon.apiTypes.map((type)=>{
                                         return(
                                            <div key={pokemon.id}>
                                           <Link to={`/pokemonsbytype/${type.name}`} key={type.name}>
                                            {type.name};
                                            
                                           </Link>
                                           
                                    
                                            <Link to = {`/pokemon-resistance/${type.name}`}> Poke that got resistance to {type.name}; 
                                        
    
                                        </Link>
                                      
                                        </div>
                                            
                                           
                                         )
                                        
                                    })}
                                    
                                    <Link to = {`/pokemonsdetails/${pokemon.id}`}>
                                    宝可梦到了！
                                    </Link>

                                   

                                    </article>
                            );
                        }
                    )
            }
            </>
                )
            }
        </section>
            );
};  

export default ListPokemons;


//{pokemon.apiTypes.map(type)=>{ 
    //return <p key ={type.name}>{type.name}</p>;
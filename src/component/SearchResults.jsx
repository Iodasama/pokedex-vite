import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {

    const { searchText } = useParams(null) ;

    const [pokemonFound, setPokemonFound] = useState();
    
    
    fetch(" https://pokebuildapi.fr/api/v1/pokemon/" + searchText)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemonFound(data);
            })
        

   

    return (
        <section>
            <p>Search Results</p>

            {pokemonFound && (
                <article key={pokemonFound.id}>
                    <h3>{pokemonFound. name}</h3>
                    {pokemonFound.apiTypes.map((type) => {
                        return <p key={type.name}>{type.name}</p>
                    })} 
                </article>

            )}
             
           
        </section>
            
    
    

    )

};



export default SearchResults;
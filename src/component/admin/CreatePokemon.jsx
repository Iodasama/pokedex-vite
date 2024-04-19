const CreatePokemon = () => {
  const handleCreatePokemon = (event) => {
    event.preventDefault();

    
    const name = event.target.name.value;
    const generation = event.target.generation.value;

   
    const json = JSON.stringify({
      name: name,
      generation: generation,
    });

  
    fetch("https://pokebuildapi.fr/api/v1/pokemon", {
      method: "POST",
      body: json,
    });
  };

  return (
    <section className="CreatePoke" >
      <h2>打造最完美的宝可梦属性组合</h2>

      <form onSubmit={handleCreatePokemon}>
        <div>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label>
            Generation :
            <input type="text" name="generation" />
          </label>
        </div>

        <input type="submit" value="打造新的宝可梦世界" />
      </form>
    </section>
  );
};

export default CreatePokemon;

import { useState, useEffect } from "react";

function Pokemon({ id, avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>
        <span># {id}</span> {name}
      </figcaption>
    </figure>
  );
}

export default function AjaxHookFuncion() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        const pokemonDetails = json.results.map(async (pokemon) => {
          const detailRes = await fetch(pokemon.url);
          const detailJson = await detailRes.json();
          return {
            id: detailJson.id,
            name:
              detailJson.name.charAt(0).toUpperCase() +
              detailJson.name.slice(1),
            avatar: detailJson.sprites.front_default,
          };
        });

        const pokemonData = await Promise.all(pokemonDetails);
        setPokemon(pokemonData);
      } catch (error) {
        console.error(error);
        setPokemon([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <>
        <h3>Peticiones Asíncronas en Componentes Funcionales</h3>

        {pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          <div className="pokemon-grid ">
            {pokemons.map((el) => (
              <Pokemon
                key={el.id}
                id={el.id}
                name={el.name}
                avatar={el.avatar}
              />
            ))}
          </div>
        )}
      </>
    </>
  );
}

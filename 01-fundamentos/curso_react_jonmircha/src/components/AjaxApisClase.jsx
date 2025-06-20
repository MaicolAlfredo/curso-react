import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>
        <span># {props.id}</span> {props.name}
      </figcaption>
    </figure>
  );
}

export default class AjaxApisClase extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        const pokemonDetails = json.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );

        Promise.all(pokemonDetails)
          .then((results) => {
            const pokemonData = results.map((result) => ({
              id: result.id,
              name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
              avatar: result.sprites.front_default,
            }));
            this.setState({ pokemons: pokemonData });
          })
          .catch((error) => {
            console.error(error);
            this.setState({ pokemons: [] });
          });

        /*   json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
                avatar: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons });
            });
        }); */

        /* Sí, hay algunos problemas potenciales en esta implementación que podrían causar comportamientos inesperados o errores. Aquí te detallo los puntos problemáticos:

        1. Uso de forEach en lugar de manejar las promesas en conjunto:
            * Estás usando json.results.forEach para iterar sobre los Pokémon y hacer un fetch por cada uno. Esto significa que cada fetch se ejecuta de forma independiente, y los resultados se procesan uno por uno sin esperar a que todos los fetch terminen.
            
            * El problema es que forEach no devuelve promesas ni permite coordinarlas. Esto puede llevar a que el estado (this.state.pokemons) se actualice de manera desordenada, ya que las respuestas de los fetch no llegan necesariamente en el mismo orden que los Pokémon en json.results.
        2. Actualización del estado en cada fetch (this.setState dentro del bucle):
            * Llamas a this.setState({ pokemons }) dentro del .then de cada fetch individual. Esto significa que estás actualizando el estado 20 veces (una por cada Pokémon), lo cual es ineficiente y puede causar problemas de rendimiento.
            
            * Además, debido a que setState es asíncrono, podrías tener conflictos si múltiples actualizaciones intentan modificar this.state.pokemons al mismo tiempo. En el peor de los casos, podrías perder algunos Pokémon o tener un estado inconsistente.
        3. Dependencia en el orden de las respuestas:
            * Como los fetch son asíncronos, las respuestas de las URLs (el.url) pueden llegar en un orden diferente al de la lista original (json.results). Por ejemplo, el fetch para el Pokémon 20 podría completarse antes que el del Pokémon 1. Tu código agrega los Pokémon al estado en el orden en que llegan las respuestas, lo que podría desordenar la lista.
           
        */
      });
  }

  render() {
    return (
      <>
        <h3>Peticiones Asíncronas en Componentes de Clase</h3>

        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          <div className="pokemon-grid ">
            {this.state.pokemons.map((el) => (
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
    );
  }
}

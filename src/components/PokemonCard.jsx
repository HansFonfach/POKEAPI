import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";
import "./card.css";
//import "./card.js"

export const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const getPokemones = async () => {
    const newPokemon = await getPokemon(pokemon);
    setPokemonData(newPokemon);
  };

  useEffect(() => {
    getPokemones();
  }, []);

  if (!pokemonData) {
    return (
      <div class="alert alert-danger " role="alert">
        El pokemon que busca no se ha encontrado
      </div>
    );
  }

  return (
    <>
      <div class="container  d-flex justify-content-center mt-5">
        <div className={`card ${pokemonData.types[0]} shadow`}>
          <div class="card-header ">
            {pokemonData.name}# <p>{pokemonData.pokedex[0]}</p>
            <span class="badge badge-water float-left">
              {pokemonData.types.map((type, index) => (
                <div key={index}>{type} </div>
              ))}
              
            </span>
          </div>
          <div class="card-body text-center">
            <p>
              <img src={`${pokemonData.imagen}`} />
            </p>
            <p>
              <strong>Attack</strong>: 65
            </p>
            <p>
              <strong>Defense</strong>: 60
            </p>
            <p>
              <strong>Special Attack</strong>: 110
            </p>
            <p>
              <strong>Special Defense</strong>: 95
            </p>
            <p>
              <strong>Speed</strong>: 65
            </p>
          </div>
          <div class="card-footer text-center">
            <div class="abilities">
              <div>
                <strong>Ability </strong>{" "}
                {pokemonData.abilities.map((ability, index) => (
                  <div key={index}> {ability}</div>
                ))}{" "}
              </div>
              <div></div>
            </div>
            <button type="button" class="btn btn-danger">GUARDAR</button>
          </div>
          
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

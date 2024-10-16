import { useState } from "react";
import { AddPokemon } from "./AddPokemon";
import { PokemonCard } from "./PokemonCard";

export const PokemonGrid = () => {
  const [pokemones, setPokemones] = useState([]);

  const onSearchPokemon = (newPokemon) => {
    setPokemones([newPokemon]);
    console.log(newPokemon);
  };

  return (
    <>
      <AddPokemon onNewPokemon={(value) => onSearchPokemon(value)} />

      {pokemones.map((pokemon) => (
        <PokemonCard  key={pokemon} pokemon={pokemon}/>
      ))}

      
    </>
  );
};

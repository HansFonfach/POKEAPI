import { NavBar } from "../../components/NavBar";
import { PokemonGrid } from "../../components/PokemonGrid";
import { getPokemon } from "../../helpers/getPokemon";


export const PokeIndex = () => {
  getPokemon("pikachu")

  return (
    <>
      <NavBar />
      <PokemonGrid />
    </>
  );
};

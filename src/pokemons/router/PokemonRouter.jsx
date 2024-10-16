import { Route, Routes } from "react-router-dom";

import { PokeIndex } from "../pages/PokeIndex";
import { PokemonPage } from "../pages/PokemonPage";

export const PokemonRouter = () => {
  return (
    <>
      <Routes>
        <Route path="pokemon" element={<PokeIndex />} />
        <Route path="pokemoninfo" element={<PokemonPage />} />
      </Routes>
    </>
  );
};

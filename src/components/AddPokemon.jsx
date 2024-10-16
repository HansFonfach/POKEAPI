import { useState } from "react";

export const AddPokemon = ({ onNewPokemon }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
   
    onNewPokemon(inputValue);
    setInputValue('');

    //    setPokemones(pokemones =>[inputValue, ...pokemones]) esto si quisiera conservar los otros pokemones
  };

  return (
    <>
      <form onSubmit={onSubmit} >
        <div className="row mt-4">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control mr-2 border-primary"
              id="pokemonName"
              placeholder="Nombre del Pokémon"
              onChange={onInputChange}
            />
          </div>
          <div class="col-sm-4">
            <button type="submit" className="btn btn-primary mb-2">
              Buscar Pokémon
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

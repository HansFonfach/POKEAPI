export const getPokemon = async (pokemon) => {
   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
   const resp = await fetch(url);

   const data = await resp.json();

   const pokemones = {
     name: data.name,
     abilities: data.abilities.map(ability => ability.ability.name),
     types: data.types.map(type => type.type.name),
     imagen: data.sprites.front_default,
     pokedex: data.game_indices.map(pokedex => pokedex.game_index)
   };

   console.log(pokemones);
   return pokemones;
   
 };


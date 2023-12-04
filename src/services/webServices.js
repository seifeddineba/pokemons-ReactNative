export const GETALLPOKEMONS = async function (args) {
  const data = [];
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${args.limit}&offset=${args.offset}`
  );
  const allpokemon = await response.json();

  await Promise.all(
    allpokemon.results.map(async (pokemon) => {
      const fetchedData = await pokemonData(pokemon);
      data.push(fetchedData);
    })
  );

  return data;
};

async function pokemonData(pokemon) {
  let url = pokemon.url;
  const response = await fetch(url);
  const pokeData = await response.json();
  return pokeData;
}

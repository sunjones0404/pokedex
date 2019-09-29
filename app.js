class Pokemon {
    async getAllPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const responseData = response.json()
        return responseData
    }
}

const pokemon = new Pokemon
const pokemonUI = new PokemonUI

pokemon.getAllPokemon().then(data => {
    pokemonUI.pokemonCard(data.results)
})
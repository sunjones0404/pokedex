class Pokemon {
    async getPokemon(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const responseData = response.json()
        return responseData
    }
}

const pokemon = new Pokemon
const pokemonUI = new PokemonUI

let count = [1,2,3,4,5]

count.forEach((id) => {
    pokemon.getPokemon(id).then(data => {
        pokemonUI.pokemonCard(data)
    })
})

document.getElementById('next').addEventListener('click', () => {
    count = count.map(num => {return num + 5});
    pokemonUI.clearPokemon()
    count.forEach((id) => {
        pokemon.getPokemon(id).then(data => {
            pokemonUI.pokemonCard(data)
        })
    })
})
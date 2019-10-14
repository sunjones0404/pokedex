class Pokemon {
  async getPokemon(id) {
    const loader = `<div class="loader"></div>`
    document.querySelector('.pokemon-header').innerHTML = loader
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const responseData = response.json()
    return responseData
  }
}

const pokemon = new Pokemon()
const pokemonUI = new PokemonUI()

let count = 1

pokemon.getPokemon(count).then(data => {
  pokemonUI.pokemonCard(data)
})

document.getElementById('next').addEventListener('click', () => {
  count = ++count
  pokemonUI.clearPokemon()
  pokemon.getPokemon(count).then(data => {
    pokemonUI.pokemonCard(data)
  })
})

document.getElementById('previous').addEventListener('click', () => {
  if (count > 1) {
    count = --count
    pokemonUI.clearPokemon()
    pokemon.getPokemon(count).then(data => {
      pokemonUI.pokemonCard(data)
    })
  }
})

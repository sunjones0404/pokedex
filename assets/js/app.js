class Pokemon {
  async getPokemon(id) {
    // Loader
    const pokemonHeader = document.querySelector('.pokemon-header')
    pokemonHeader.innerHTML = `
    <div class="loader-wrapper">
      <img class="loader" src="./assets/img/pokeball.png" alt="Loader" />
    </div>
    `

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const responseData = response.json()
      return responseData
    } catch (err) {
      console.error(err)
    } finally {
    }
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

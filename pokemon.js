class PokemonUI {
    async getPokemon(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const responseData = response.json()
        return responseData
    }
    
    pokemonCard(results) {
        const pokedex = document.getElementById('pokedex')

        results.forEach(pokemon => {
            this.getPokemon(pokemon.name).then(data => {
                const pokemonCard = `
                <li class="pokedex-list__item">
                    <p>
                        <span class="pokemon-title">
                            Name:
                        </span>
                        <br> 
                        <span class="pokemon-name">
                            ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </span>
                    </p>
                    <img class="pokemon-img" src="${data.sprites.front_default}">
                </li>
                `
                pokedex.innerHTML += pokemonCard
            })
            
        })
    }
}
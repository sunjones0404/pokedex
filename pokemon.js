class PokemonUI {

    clearPokemon() {
        const pokedex = document.getElementById('pokedex')
        pokedex.innerHTML = ''
    }
    
    pokemonCard(pokemon) {
        const pokedex = document.getElementById('pokedex')

        const pokemonCard = `
        <li class="pokedex-list__item">
            <div class="pokedex-list__row">
                <p class="pokemon-name">
                    ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </p>
                <img class="pokemon-img" src="${pokemon.sprites.front_default}">
            </div>
            <ul>
                ${pokemon.types.map(type => (
                    `<li class="
                        ${type.type.name === 'poison' ? 'type poison' : 'type default'}
                        ${type.type.name === 'grass' ? 'type grass' : 'type default'}
                        ${type.type.name === 'fire' ? 'type fire' : 'type default'}
                        ${type.type.name === 'flying' ? 'type flying' : 'type default'}
                    ">${type.type.name}</li>`
                )).join("")}
            </ul>
        </li>
        `
        pokedex.innerHTML += pokemonCard
    }
}
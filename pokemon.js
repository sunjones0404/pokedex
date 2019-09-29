class PokemonUI {

    clearPokemon() {
        const pokedex = document.getElementById('pokedex')
        pokedex.innerHTML = ''
    }
    
    pokemonCard(pokemon) {
        // console.log(pokemon.types)
        const pokedex = document.getElementById('pokedex')

        const pokemonCard = `
        <li class="pokedex-list__item">
            <div class="pokedex-list__row">
                <p>
                    <span class="pokemon-title">
                        Name:
                    </span>
                    <br> 
                    <span class="pokemon-name">
                        ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </span>
                </p>
                <img class="pokemon-img" src="${pokemon.sprites.front_default}">
            <div>
            <ul>
                ${pokemon.types.map(type => (
                    `<li>${type.type.name}</li>`
                )).join("")}
            </ul>
        </li>
        `
        pokedex.innerHTML += pokemonCard
    }
}
class PokemonUI {
  clearPokemon() {
    const pokemonHeader = document.querySelector('.pokemon-header')
    const pokemonTypes = document.querySelector('.pokemon-types')
    pokemonHeader.innerHTML = ''
    pokemonTypes.innerHTML = ''
  }

  pokemonCard(pokemon) {
    const pokemonHeader = document.querySelector('.pokemon-header')
    const pokemonTypes = document.querySelector('.pokemon-types')
    const background = document.querySelector('.container')

    background.className = `container bg ${pokemon.types[0].type.name}`

    const pokemonHeaderInfo = `
      <p class="name">
          ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </p>
      <img class="img" src="${pokemon.sprites.front_default}">

      <div class="progress-wrapper">

        ${pokemon.stats
          .map(
            pokemon =>
              `
          <div class="progress-bar">
          <p class="progress-bar__title">${pokemon.stat.name
            .charAt(0)
            .toUpperCase() +
            pokemon.stat.name.slice(1)} <span class="progress-bar__stat">${
                pokemon.base_stat
              }</span>
          </p>
          <div class="progress-bar__outer">
            <div class="progress-bar__inner" style="width: ${
              pokemon.base_stat
            }%">
              <div class="progress-bar__inner-fill"></div>
            </div>
          </div>
        </div>
          `
          )
          .join('')}
      </div>
  `

    const pokemonTypesInfo = `
    ${pokemon.types
      .map(
        type =>
          `<li class="
          ${type.type.name === 'poison' ? 'type poison' : 'type default'}
          ${type.type.name === 'grass' ? 'type grass' : 'type default'}
          ${type.type.name === 'fire' ? 'type fire' : 'type default'}
          ${type.type.name === 'flying' ? 'type flying' : 'type default'}
          ${type.type.name === 'water' ? 'type water' : 'type default'}
          ${type.type.name === 'normal' ? 'type normal' : 'type default'}
          ${type.type.name === 'electric' ? 'type electric' : 'type default'}
          ${type.type.name === 'ice' ? 'type ice' : 'type default'}
          ${type.type.name === 'fighting' ? 'type fighting' : 'type default'}
          ${type.type.name === 'ground' ? 'type ground' : 'type default'}
          ${type.type.name === 'psychic' ? 'type psychic' : 'type default'}
          ${type.type.name === 'bug' ? 'type bug' : 'type default'}
          ${type.type.name === 'rock' ? 'type rock' : 'type default'}
          ${type.type.name === 'ghost' ? 'type ghost' : 'type default'}
          ${type.type.name === 'dragon' ? 'type dragon' : 'type default'}
          ${type.type.name === 'dark' ? 'type dark' : 'type default'}
          ${type.type.name === 'steel' ? 'type steel' : 'type default'}
          ${type.type.name === 'fairy' ? 'type fairy' : 'type default'}
      ">${type.type.name}</li>`
      )
      .join('')}
  `

    pokemonHeader.innerHTML = pokemonHeaderInfo
    pokemonTypes.innerHTML = pokemonTypesInfo
  }
}

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const showDetail = document.getElementById('detalhes-btn')

const maxRecords = 151
const limit = 10
let offset = 0

function loadpokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
        <li id="card-pokemon" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div id="detail" class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img id="img" src="${pokemon.photo}"
                    alt=">${pokemon.name}">
            </div>
            <div id="information" class="information">
                <span class="letters-information"><p> <b>Altura:</b> ${pokemon.height}</p></span>
                <span class="letters-information"><p> <b>Peso:</b> ${pokemon.weight}</p></span>
                <span class="letters-information"><p> <b>Habilidades:</b> ${pokemon.abilities.map((ability) => `${ability}, ${ability}`).join('')}</p></span>
            </div>
        </li>
    `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadpokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadpokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadpokemonItens(offset, limit)
    }
})

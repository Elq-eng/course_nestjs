export const pokemonIds = [ 1,20,30,34,66 ];


pokemonIds.push(+'1')


interface Pokemon {
  id: number,
  name: string,
  age?: number 
}

export const charmander: Pokemon = {
  id: 0,
  name: ""
}


export const bulbasaur: Pokemon = {
  id:1,
  name:'bulbasaur'
}



export const pokemons: Pokemon[] = [];

pokemons.push( charmander, bulbasaur )
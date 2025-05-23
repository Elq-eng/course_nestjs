import { Move, PokeAPIReponse }  from '../interfaces/pokeapi-response.interface'
import { HttpAdapter, PokeApiAdapter, PokeAPIFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
      const data = await this.http.get<PokeAPIReponse>('https://pokeapi.co/api/v2/pokemon/4')

      console.log( data.moves)
      return data.moves
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeAPIFetchAdapter();

export const charmander = new Pokemon( 4, 'Charmander', pokeApiFetch );

charmander.getMoves();
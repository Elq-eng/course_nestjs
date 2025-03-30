import axios from 'axios'
import { Move, PokeAPIReponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

  // public id: number;
  // public name: string;

  // constructor( id:number, name:string ){
  //   this.id = id;
  //   this.name = name;

  // }

  get imageUrl(): string{

    return `https://pokemon.com/${ this.id }.jpg`
  }

  constructor(public readonly id:number,public name:string  ){ }

  scream(){
    console.log(`${ this.name.toUpperCase()} !!!`);
    
  }

  speak(){
    console.log(`${ this.name }, ${ this.name }`)
  }

  async getMoves(): Promise<Move[]>{

    const { data } = await axios.get<PokeAPIReponse>('https://pokeapi.co/api/v2/pokemon/4')

    console.log(data.moves)
    return data.moves

  }




}


export const charmander = new Pokemon( 4, 'Charmander')

console.log( charmander.getMoves())
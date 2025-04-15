import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
export declare class SeedService {
    private readonly pokemonModel;
    private readonly axios;
    constructor(pokemonModel: Model<Pokemon>);
    executeSeed(): Promise<string>;
}

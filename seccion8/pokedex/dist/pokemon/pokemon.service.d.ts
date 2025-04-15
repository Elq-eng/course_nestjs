import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { Model } from 'mongoose';
export declare class PokemonService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    create(createPokemonDto: CreatePokemonDto): Promise<import("mongoose").Document<unknown, {}, Pokemon> & Pokemon & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePokemonDto: UpdatePokemonDto): string;
    remove(id: number): string;
}

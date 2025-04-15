import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePokemonDto: UpdatePokemonDto): string;
    remove(id: string): string;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PokemonService = class PokemonService {
    pokemonModel;
    constructor(pokemonModel) {
        this.pokemonModel = pokemonModel;
    }
    async create(createPokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
        const pokemon = await this.pokemonModel.create(createPokemonDto);
        return pokemon;
    }
    findAll() {
        return `This action returns all pokemon`;
    }
    findOne(id) {
        return `This action returns a #${id} pokemon`;
    }
    update(id, updatePokemonDto) {
        return `This action updates a #${id} pokemon`;
    }
    remove(id) {
        return `This action removes a #${id} pokemon`;
    }
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map
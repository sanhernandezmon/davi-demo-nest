import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Pokemon } from '../models/Pokemon.model';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    async getAllPokemons(): Promise<Pokemon[]> {
        return this.pokemonService.getAllPokemons();
    }

    @Get(':name')
    async getPokemonByName(@Param('name') name: string): Promise<Pokemon> {
        return this.pokemonService.getPokemonByName(name);
    }

    @Post()
    async createPokemon(@Body() pokemon: Pokemon): Promise<Pokemon> {
        return this.pokemonService.createPokemon(pokemon);
    }

    @Put()
    async updatePokemon(@Body() pokemon: Pokemon): Promise<Pokemon> {
        return this.pokemonService.updatePokemon(pokemon);
    }

    @Delete(':id')
    async deletePokemon(@Param('id') id: string): Promise<void> {
        return this.pokemonService.deletePokemon(+id);
    }
}

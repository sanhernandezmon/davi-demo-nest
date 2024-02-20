import { Injectable } from '@nestjs/common';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDao } from './pokemon.dao';

@Injectable()
export class PokemonService {
    constructor(private readonly pokemonDao: PokemonDao) {}

    async getAllPokemons(): Promise<Pokemon[]> {
        return this.pokemonDao.getAllPokemons();
    }

    async getPokemonByName(name: string): Promise<Pokemon> {
        return this.pokemonDao.getPokemonByName(name);
    }

    async createPokemon(pokemon: Pokemon): Promise<Pokemon> {
        return this.pokemonDao.createPokemon(pokemon);
    }

    async updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
        return this.pokemonDao.updatePokemon(pokemon);
    }

    async deletePokemon(id: number): Promise<void> {
        return this.pokemonDao.deletePokemon(id);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonDao {
    constructor(@InjectRepository(Pokemon) private readonly pokemonRepository: Repository<Pokemon>) {}

    async getAllPokemons(): Promise<Pokemon[]> {
        return this.pokemonRepository.find();
    }

    async getPokemonByName(name: string): Promise<Pokemon> {
        return this.pokemonRepository.findOne({ where: { name } });
    }

    async createPokemon(pokemon: Pokemon): Promise<Pokemon> {
        return this.pokemonRepository.save(pokemon);
    }

    async updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
        return this.pokemonRepository.save(pokemon);
    }

    async deletePokemon(id: number): Promise<void> {
        await this.pokemonRepository.delete(id);
    }
}

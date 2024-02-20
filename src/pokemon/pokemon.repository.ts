import { EntityRepository, Repository } from 'typeorm';
import { Pokemon } from './../models/Pokemon.model';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon> {
    // Add custom repository methods here if needed
}

import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon) private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  create(createPokemonDto: CreatePokemonDto) {
    const pokemon = new Pokemon();
    pokemon.name = createPokemonDto.name
    pokemon.level = createPokemonDto.level
    pokemon.type = createPokemonDto.type
    pokemon.isShiny=createPokemonDto.isShiny

    return this.pokemonRepository.save(pokemon);
  }

  findAll() {
    return this.pokemonRepository.find();
  }

  findOne(id: number) {
    return this.pokemonRepository.findOneByOrFail({id : id});
  }
  

  async update(id: number, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.pokemonRepository.findOneByOrFail({id : id});
    if (!pokemon) {
      throw new Error(`Pokemon with id ${id} not found`);
    }
  
    // Update the pokemon entity with the new values from updatePokemonDto
    pokemon.name = updatePokemonDto.name;
    pokemon.level = updatePokemonDto.level;
    pokemon.type = updatePokemonDto.type;
    pokemon.isShiny = updatePokemonDto.isShiny;
  
    // Save the updated pokemon entity
    return this.pokemonRepository.save(pokemon);
  }
  

  remove(id: number) {
    return this.pokemonRepository.delete(id);
  }
}

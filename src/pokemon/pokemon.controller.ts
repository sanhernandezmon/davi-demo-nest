import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) : Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll():Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Pokemon> {
    return this.pokemonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id' , ParseIntPipe) id: string, @Body() updatePokemonDto: UpdatePokemonDto) : Promise<Pokemon> {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}

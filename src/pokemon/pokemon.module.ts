import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      database: 'pokemonDb',
      synchronize: true,
      logging: true,
      entities: [Pokemon],
      extra: {
        // Create the database if it does not exist
        createDatabase: true,
      },
    }),
    TypeOrmModule.forFeature([Pokemon])
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}

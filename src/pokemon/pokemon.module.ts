import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonDao } from './pokemon.dao';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true, // set to false in production
    }),
  ],
  controllers: [PokemonController],
  providers: [PokemonService , PokemonDao],
})
export class PokemonModule {}

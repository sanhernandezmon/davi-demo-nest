import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { LoggerMiddleware } from './middleware/logger.middleware';


@Module({
  imports: [PokemonModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('pokemon');
  }
}
import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { Pokemon } from './models/pokemon.model';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getAllPokemons: jest.fn(),
            getPokemonByName: jest.fn(),
            createPokemon: jest.fn(),
            updatePokemon: jest.fn(),
            deletePokemon: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllPokemons', () => {
    it('should return an array of Pokemons', async () => {
      const result = [
        { id: 1, name: 'Pikachu', type: 'Electric', level: 5, isShiny: false } as Pokemon,
        { id: 2, name: 'Charmander', type: 'Fire', level: 5, isShiny: false } as Pokemon,
      ];
      jest.spyOn(service, 'getAllPokemons').mockResolvedValue(result);

      expect(await controller.getAllPokemons()).toBe(result);
    });
  });

  // Add tests for other controller methods like getPokemonByName, createPokemon, updatePokemon, deletePokemon
});

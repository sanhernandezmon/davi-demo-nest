import {
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
    IsBoolean
  } from 'class-validator';

export class CreatePokemonDto {
  
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEnum(['fire', 'water', 'grass'])
    type: string;

    @IsInt()
    level: number;

    @IsBoolean()
    isShiny: boolean;
}

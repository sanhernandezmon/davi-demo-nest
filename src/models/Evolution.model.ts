import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from './Pokemon.model';

@Entity()
export class Evolution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    evolutionLevel: number;

    @Column()
    evolutionName: string;

    @ManyToOne(() => Pokemon, pokemon => pokemon.evolutions)
    @JoinColumn({ name: 'pokemonId' })
    pokemon: Pokemon;

}

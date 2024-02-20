import { Logger } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn , OneToMany} from 'typeorm';
import { Evolution } from './Evolution.model';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    level: number;

    @Column()
    isShiny: boolean;

    @OneToMany(() => Evolution, evolution => evolution.pokemon)
    evolutions: Evolution[];

}

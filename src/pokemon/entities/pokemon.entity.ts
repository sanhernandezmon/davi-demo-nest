import { Column, Entity, PrimaryGeneratedColumn , BaseEntity} from 'typeorm';

@Entity()
export class Pokemon  extends BaseEntity {
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
}

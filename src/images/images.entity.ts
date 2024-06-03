import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Car } from '../car/car.entity';

@Entity({name:"Images"})
export class Images {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => Car, (car) => car.images)
    car: Car;
}


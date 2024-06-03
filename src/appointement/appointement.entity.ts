import { Car } from 'src/car/car.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({name:"Appointement"})
export class Appointement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    FirstName: string;

    @Column()
    Email: string;

    @Column()
    Message: string;

    @Column()
    Contact: string;

    @Column()
    AppointementDate: Date;

    @Column()
    Status: string;

    @ManyToOne(() => Car, (car) => car.appointements)
    car: Car;
}

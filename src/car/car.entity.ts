import { Appointement } from 'src/appointement/appointement.entity';
import { Images } from 'src/images/images.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';

@Entity({name:"Car"})
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column()
  motorType: string;

  @Column()
  power: number;

  @Column()
  place: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @OneToMany(() => Images, image => image.car,{cascade:true, eager:true})
  images: Images[]

  @OneToMany(() => Appointement, appointement => appointement.car)
  appointements: Appointement[]
}

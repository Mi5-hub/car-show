import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Email: string;

    @Column()
    Password: string;

    @Column()
    Name: string;

    @BeforeInsert()
    async hashPassword() {
      this.Password = await bcrypt.hash(this.Password, 10);
    }
  
    async comparePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.Password);
    }
}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, SigninUserDto, SignupUserDto } from './user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}
    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    async create(email: string, password: string, name: string): Promise<User> {
        const user = this.userRepository.create({ Email: email, Password: password, Name: name });
        return this.userRepository.save(user);
      }
    
      async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { Email: email } });
      }

}

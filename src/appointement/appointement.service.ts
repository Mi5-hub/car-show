import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointement } from './appointement.entity';

@Injectable()
export class AppointementService {
    constructor(@InjectRepository(Appointement) private appointementRepository: Repository<Appointement>) {}

    async getAll(): Promise<Appointement[]> {
        try {
            console.log("SERVICE....");
            return await this.appointementRepository.find();
        } catch (error) {
            return error
        }
    }
}

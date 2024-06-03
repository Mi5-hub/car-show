import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from './images.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
    constructor(@InjectRepository(Images) private imagesRepository: Repository<Images>){}

    async getAll(): Promise<Images[]> {
        try {
            return await this.imagesRepository.find();
        } catch (error) {
            return error.message
        }
    }
}

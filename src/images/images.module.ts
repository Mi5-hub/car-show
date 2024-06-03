import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from './images.entity';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
    imports: [TypeOrmModule.forFeature([Images])],
    providers: [ImagesService],
    controllers: [ImagesController],
})
export class ImagesModule {}

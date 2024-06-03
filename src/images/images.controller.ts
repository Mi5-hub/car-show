import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('images')
@ApiTags('Images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService){}

    @Get()
    @ApiOperation({summary: 'Get all images'})
    getAll() {
        try {
            return this.imagesService.getAll();
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }
}

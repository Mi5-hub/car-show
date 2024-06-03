import { Controller, Get } from '@nestjs/common';
import { AppointementService } from './appointement.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Appointement } from './appointement.entity';

@Controller('appointement')
@ApiTags('Appointement')
export class AppointementController {

    constructor(private  appointementService: AppointementService) {}
    
    @Get()
    @ApiOperation({ summary: 'Get all appointements' })
     async getAppointementList():Promise<Appointement[]> {
        try {
            return await this.appointementService.getAll();
        } catch (error) {
            return error.message
        }
    }
}

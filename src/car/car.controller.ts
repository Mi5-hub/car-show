import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CreateCarDto, UpdateCarDto } from './car.dto';

@Controller('car')
@ApiTags('Cars API')
export class CarController {
    constructor(private readonly carService: CarService){}
    @Get()
    @ApiOperation({ summary: 'Get all cars' })
    async GetAllCars() {
        try {
            return await this.carService.GetAll();         
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }
    @Post('new')
    @ApiOperation({ summary: 'Create new car' })
    async CreateCar(@Body() CreateCarDto: CreateCarDto) {
        try {
            return await this.carService.CreateCar(CreateCarDto);
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }

    @Put("update/:id")
    @ApiOperation({ summary: 'Update car' })
    async UpdateCar(@Param('id') id: number, @Body() CarDto: UpdateCarDto) {
        try {
            return await this.carService.UpdateCar(CarDto, id);
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }
    
    @Delete('delete/:id')
    @ApiOperation({ summary: 'Delete car' })
    async DeleteCar(@Param('id') id: number) {
        try {
            return await this.carService.DeleteCar(id);
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }
}

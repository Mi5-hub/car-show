import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto, UpdateCarDto } from './car.dto';

@Injectable()
export class CarService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

    async GetAll(): Promise<Car[]> {
        try {
            return await this.carRepository.find();
        } catch (error) {
            return error
        }
    }
    
    async CreateCar(car: CreateCarDto): Promise<Car> {
        try {
            return await this.carRepository.save(car);
        } catch (error) {
            return error
        }
    }

    async UpdateCar(CarDto: UpdateCarDto, id: number){
        try {
            const carToUpdate = await this.carRepository.findOne({where: {id}});
            
            if (!carToUpdate)
                return {error:true,message:"Car not found"};
            const data =  this.carRepository.merge(carToUpdate, CarDto);
            return await this.carRepository.save(data);
        } catch (error) {
            return error
        }
    }

    async DeleteCar(id: number) {
        try {
            return await this.carRepository.delete(id);
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }

}

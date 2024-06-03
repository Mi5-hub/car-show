import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail } from "class-validator";
import { Car } from "src/car/car.entity";

export class CreateAppointementDto {
    @ApiProperty()
    Name: string;

    @ApiProperty()
    FirstName: string;

    @IsEmail()
    @ApiProperty()
    Email: string;

    @ApiProperty()
    Message: string;

    @ApiProperty()
    Contact: string;

    @ApiProperty()
    @IsDate({message: "Date should be a date"})
    AppointementDate: Date;
    @ApiProperty()
    Status: string;

}

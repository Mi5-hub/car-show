import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Car } from "src/car/car.entity";

export class CreateImagesDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    url: string;


}

export class UpdateImagesDto extends PartialType(CreateImagesDto){}

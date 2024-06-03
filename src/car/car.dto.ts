
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsOptional, ValidateNested } from "class-validator";
import { CreateAppointementDto } from "src/appointement/appointement.dto";
import { CreateImagesDto } from "src/images/images.dto";
import { Images } from "src/images/images.entity";


export class CreateCarDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    brand: string;
  
    @ApiProperty()
    model: string;
  
    @ApiProperty()
    price: number;
  
    @ApiProperty()
    color: string;
  
    @ApiProperty()
    motorType: string;
  
    @ApiProperty()
    power: number;
  
    @ApiProperty()
    place: string;
  
    @ApiProperty()
    status: string;
  
    @ApiProperty()
    type: string;
  
    @ApiProperty({type:() => CreateImagesDto, isArray:true})
    @ValidateNested({each:true})
    @IsArray()
    @Type(()=>CreateImagesDto)
    images: CreateImagesDto[];

    @ApiProperty({type:() => CreateAppointementDto, isArray:true})
    @ValidateNested({each:true})
    @IsArray()
    @Type(()=>CreateAppointementDto)
    appointements: CreateAppointementDto[];
  }

export class UpdateCarDto extends PartialType(CreateCarDto) {}

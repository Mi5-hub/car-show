import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    Password: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    Name: string;
}
export class SignupUserDto {
    @ApiProperty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    Password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    confirmPassword: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    Name: string;
}
export class SigninUserDto {
    @ApiProperty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    Password: string;
}
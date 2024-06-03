import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, SigninUserDto, SignupUserDto } from './user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: 'get user' })
    getAll() {
        try {
            return this.userService.getAll();
        } catch (error) {
            return {
                error:true,
                message:error.message
            }
        }
    }

}

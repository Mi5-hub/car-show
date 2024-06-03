// auth.controller.ts
import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SigninUserDto, SignupUserDto } from 'src/user/user.dto';


@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Body() userBody:SigninUserDto) {
    console.log("TEST",userBody);
    return this.authService.login(userBody);
  }

  @Post('signup')
  async signup(@Body() userBody:SignupUserDto) {
    const user = await this.authService.signup(userBody);
    return user;
  }
}

// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SigninUserDto, SignupUserDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await user.comparePassword(pass)) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userBody: SigninUserDto) {
    const user = await this.userService.findByEmail(userBody.Email);
    if (user && await user.comparePassword(userBody.Password)) {
      const payload = { email: user.Email, sub: user.id };
      return { access_token: this.jwtService.sign(payload) };
    }
    throw new UnauthorizedException('Invalid credentials');
  }


  async signup(userBody:SignupUserDto) {
    const { Email, Password, Name } = userBody;
    const user = await this.userService.create(Email, Password, Name);
    return this.login(user);
  }
}

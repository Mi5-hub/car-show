import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/typeorm.config';
import { CarModule } from './car/car.module';
import { ImagesModule } from './images/images.module';
import { AppointementModule } from './appointement/appointement.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeormConnectionConfig),
    CarModule,
    ImagesModule,
    AppointementModule,
    // UserModule,
    AuthModule
  ]
})
export class AppModule {}

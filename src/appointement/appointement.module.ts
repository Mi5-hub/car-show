import { Module } from '@nestjs/common';
import { AppointementService } from './appointement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointement } from './appointement.entity';
import { AppointementController } from './appointement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Appointement])],
  controllers:[AppointementController],
  providers: [AppointementService]
})
export class AppointementModule {}

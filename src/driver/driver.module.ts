import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';

@Module({
  providers: [PrismaService, DriverService],
  controllers: [DriverController],
  exports: [DriverService], 
})
export class DriverModule {}

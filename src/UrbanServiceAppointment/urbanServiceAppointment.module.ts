import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UrbanServiceAppointmentService } from './urbanServiceAppointment.service';
import { urbanServiceAppointmentController } from './urbanServiceAppointment.controller';

@Module({
  providers: [PrismaService, UrbanServiceAppointmentService],
  controllers: [urbanServiceAppointmentController],
})
export class UrbanModule {}

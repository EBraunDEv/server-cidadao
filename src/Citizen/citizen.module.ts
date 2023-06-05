import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';

@Module({
  providers: [PrismaService, CitizenService],
  controllers: [CitizenController],
})
export class CitizenModule {}

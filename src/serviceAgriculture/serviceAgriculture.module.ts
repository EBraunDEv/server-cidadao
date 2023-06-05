import { Module } from '@nestjs/common';
import { ServiceAgricultureController } from './serviceagriculture.controller';
import { ServiceAgricultureService } from './serviceagriculture.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ServiceAgricultureController],
  providers: [ServiceAgricultureService, PrismaService],
})
export class ServiceAgricultureModule {}

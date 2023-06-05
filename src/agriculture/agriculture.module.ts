import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AgricultureService } from './agriculture.service';
import { AgricultureController } from './agriculture.controller';

@Module({
  providers: [PrismaService, AgricultureService],
  controllers: [AgricultureController],
  exports: [AgricultureService],
})
export class AgricultureModule {}

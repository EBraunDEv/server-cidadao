import { Injectable } from '@nestjs/common';
import { Prisma, AgricultureService as AgricultureServiceModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AgricultureService {
  constructor(private prisma: PrismaService) {}

  async getAllServices(): Promise<AgricultureServiceModel[]> {
    return this.prisma.agricultureService.findMany();
  }

  async createAgriculture(data: Prisma.AgricultureServiceCreateInput): Promise<AgricultureServiceModel> {
    return this.prisma.agricultureService.create({ data });
  }

  async getAgricultureById(id: number): Promise<AgricultureServiceModel | null> {
    return this.prisma.agricultureService.findUnique({ where: { id } });
  }

  async updateAgriculture(id: number, data: Prisma.AgricultureServiceUpdateInput): Promise<AgricultureServiceModel | null> {
    return this.prisma.agricultureService.update({ where: { id }, data });
  }

  async deleteAgriculture(id: number): Promise<AgricultureServiceModel | null> {
    return this.prisma.agricultureService.delete({ where: { id } });
  }
}

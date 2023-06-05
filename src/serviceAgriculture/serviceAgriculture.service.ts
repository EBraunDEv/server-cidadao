import { Injectable } from '@nestjs/common';
import { Prisma, ServiceAgriculture } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServiceAgricultureService {
  constructor(private prisma: PrismaService) {}

  async getAllServices(): Promise<ServiceAgriculture[]> {
    return this.prisma.serviceAgriculture.findMany();
  }

  async getServiceById(id: number): Promise<ServiceAgriculture | null> {
    return this.prisma.serviceAgriculture.findUnique({ where: { id } });
  }

  async createService(data: Prisma.ServiceAgricultureCreateInput): Promise<ServiceAgriculture> {
    return this.prisma.serviceAgriculture.create({ data });
  }

  async updateService(id: number, data: Prisma.ServiceAgricultureUpdateInput): Promise<ServiceAgriculture | null> {
    return this.prisma.serviceAgriculture.update({ where: { id }, data });
  }

  async deleteService(id: number): Promise<ServiceAgriculture | null> {
    return this.prisma.serviceAgriculture.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Driver, Prisma } from '@prisma/client'; 

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  async getAllDrivers(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }

  async createDriver(data: Prisma.DriverCreateInput): Promise<Driver> {
    return this.prisma.driver.create({ data });
  }

  async getDriverById(id: number): Promise<Driver | null> {
    return this.prisma.driver.findUnique({ where: { id } });
  }

  async updateDriver(
    id: number,
    data: Prisma.DriverUpdateInput
  ): Promise<Driver | null> {
    return this.prisma.driver.update({ where: { id }, data });
  }

  async deleteDriver(id: number): Promise<Driver | null> {
    return this.prisma.driver.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UrbanServiceAppointment } from '@prisma/client';

@Injectable()
export class UrbanServiceAppointmentService {
  constructor(private prisma: PrismaService) {}

  async getAllUrbanServices(): Promise<UrbanServiceAppointment[]> {
    return this.prisma.urbanServiceAppointment.findMany();
  }

  async createUrbanServiceAppointment(data: Prisma.UrbanServiceAppointmentCreateInput): Promise<UrbanServiceAppointment> {
    return this.prisma.urbanServiceAppointment.create({ data });
  }

  async getUrbanServiceAppointmentById(id: number): Promise<UrbanServiceAppointment | null> {
    return this.prisma.urbanServiceAppointment.findUnique({ where: { id } });
  }

  async updateUrbanServiceAppointment(
    id: number,
    data: Prisma.UrbanServiceAppointmentUpdateInput,
  ): Promise<UrbanServiceAppointment | null> {
    return this.prisma.urbanServiceAppointment.update({ where: { id }, data });
  }

  async deleteUrbanServiceAppointment(id: number): Promise<UrbanServiceAppointment | null> {
    return this.prisma.urbanServiceAppointment.delete({ where: { id } });
  }
}

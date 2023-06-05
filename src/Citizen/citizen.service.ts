import { Injectable } from '@nestjs/common';
import { Prisma, Citizen, UrbanServiceAppointment } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CitizenService {
  constructor(private prisma: PrismaService) {}

  async getAllCitizens(): Promise<Citizen[]> {
    return this.prisma.citizen.findMany();
  }

  async getCitizenById(id: number): Promise<Citizen | null> {
    return this.prisma.citizen.findUnique({
      where: { id },
      include: { appointments: true },
    });
  }

  async createCitizen(data: Omit<Citizen, 'id' | 'appointments'> & { numFossas: number }): Promise<Citizen> {
    const { numFossas, ...rest } = data;
  
    const citizenData: Prisma.CitizenCreateInput = {
      ...rest,
      numFossas: String(numFossas) || '0',// Converta o valor para uma string
      appointments: {
        create: [],
      },
    };
  
    return this.prisma.citizen.create({
      data: citizenData,
    });
  }

  async updateCitizen(id: number, data: Partial<Citizen>): Promise<Citizen | null> {
    return this.prisma.citizen.update({
      where: { id },
      data,
    });
  }

  async deleteCitizen(id: number): Promise<Citizen | null> {
    return this.prisma.citizen.delete({
      where: { id },
    });
  }

  async getAppointmentsByCitizenId(citizenId: number): Promise<UrbanServiceAppointment[]> {
    return this.prisma.urbanServiceAppointment.findMany({
      where: { citizenId },
    });
  }
}

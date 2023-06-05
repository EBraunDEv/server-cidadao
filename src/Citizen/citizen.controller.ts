import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { Citizen, UrbanServiceAppointment } from '@prisma/client';

@Controller('citizens')
export class CitizenController {
  constructor(private citizenService: CitizenService) {}

  @Get()
  getAllCitizens() {
    return this.citizenService.getAllCitizens();
  }

  @Post()
  async createCitizen(@Body() data: Omit<Citizen, 'id' | 'appointments'> & { numFossas: number }): Promise<Citizen> {
    return this.citizenService.createCitizen(data);
  }

  @Get(':id')
  async getCitizenById(@Param('id') id: string): Promise<Citizen | null> {
    return this.citizenService.getCitizenById(Number(id));
  }

  @Put(':id')
  async updateCitizen(@Param('id') id: string, @Body() data: Partial<Citizen>): Promise<Citizen | null> {
    return this.citizenService.updateCitizen(Number(id), data);
  }

  @Delete(':id')
  async deleteCitizen(@Param('id') id: string): Promise<Citizen | null> {
    return this.citizenService.deleteCitizen(Number(id));
  }

  @Get(':id/appointments')
  async getAppointmentsByCitizenId(@Param('id') id: string): Promise<UrbanServiceAppointment[]> {
    return this.citizenService.getAppointmentsByCitizenId(Number(id));
  }
}

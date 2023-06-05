import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UrbanServiceAppointmentService } from './urbanServiceAppointment.service';
import { Prisma, UrbanServiceAppointment } from '@prisma/client';

@Controller('urban')
export class urbanServiceAppointmentController {
  constructor(private readonly urbanService: UrbanServiceAppointmentService) {}

  @Get()
  getAllUrbanServices(): Promise<UrbanServiceAppointment[]> {
    return this.urbanService.getAllUrbanServices();
  }

  @Post()
  async createUrbanServiceAppointment(@Body() data: Prisma.UrbanServiceAppointmentCreateInput): Promise<UrbanServiceAppointment> {
    return this.urbanService.createUrbanServiceAppointment(data);
  }

  @Get(':id')
  async getUrbanServiceAppointmentById(@Param('id') id: number): Promise<UrbanServiceAppointment | null> {
    return this.urbanService.getUrbanServiceAppointmentById(id);
  }

  @Put(':id')
  async updateUrbanServiceAppointment(
    @Param('id') id: number,
    @Body() data: Prisma.UrbanServiceAppointmentUpdateInput,
  ): Promise<UrbanServiceAppointment | null> {
    return this.urbanService.updateUrbanServiceAppointment(id, data);
  }

  @Delete(':id')
  async deleteUrbanServiceAppointment(@Param('id') id: number): Promise<UrbanServiceAppointment | null> {
    return this.urbanService.deleteUrbanServiceAppointment(id);
  }
}

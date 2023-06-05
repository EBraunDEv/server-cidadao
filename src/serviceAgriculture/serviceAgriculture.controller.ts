import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ServiceAgricultureService } from './serviceagriculture.service';
import { ServiceAgriculture } from '@prisma/client';

@Controller('service-agriculture')
export class ServiceAgricultureController {
  constructor(private serviceAgricultureService: ServiceAgricultureService) {}

  @Get()
  getAllServices(): Promise<ServiceAgriculture[]> {
    return this.serviceAgricultureService.getAllServices();
  }

  @Get(':id')
  getServiceById(@Param('id') id: number): Promise<ServiceAgriculture | null> {
    return this.serviceAgricultureService.getServiceById(id);
  }

  @Post()
  createService(@Body() data: Omit<ServiceAgriculture, 'id'>): Promise<ServiceAgriculture> {
    return this.serviceAgricultureService.createService(data);
  }

  @Put(':id')
  updateService(
    @Param('id') id: number,
    @Body() data: Partial<ServiceAgriculture>,
  ): Promise<ServiceAgriculture | null> {
    return this.serviceAgricultureService.updateService(id, data);
  }

  @Delete(':id')
  deleteService(@Param('id') id: number): Promise<ServiceAgriculture | null> {
    return this.serviceAgricultureService.deleteService(id);
  }
}

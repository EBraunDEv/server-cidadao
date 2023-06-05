import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AgricultureService } from './agriculture.service';
import { Prisma, AgricultureService as AgricultureServiceModel } from '@prisma/client';

@Controller('agriculture')
export class AgricultureController {
  constructor(private readonly agricultureService: AgricultureService) {}

  @Get()
  async getAllAgricultureServices(): Promise<AgricultureServiceModel[]> {
    return this.agricultureService.getAllServices();
  }

  @Post()
  async createAgriculture(@Body() data: Prisma.AgricultureServiceCreateInput): Promise<AgricultureServiceModel> {
    return this.agricultureService.createAgriculture(data);
  }

  @Get(':id')
  async getAgricultureById(@Param('id') id: number): Promise<AgricultureServiceModel | null> {
    return this.agricultureService.getAgricultureById(id);
  }

  @Put(':id')
  async updateAgriculture(
    @Param('id') id: number,
    @Body() data: Prisma.AgricultureServiceUpdateInput,
  ): Promise<AgricultureServiceModel | null> {
    return this.agricultureService.updateAgriculture(id, data);
  }

  @Delete(':id')
  async deleteAgriculture(@Param('id') id: number): Promise<AgricultureServiceModel | null> {
    return this.agricultureService.deleteAgriculture(id);
  }
}

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver, Prisma } from '@prisma/client'; 

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  getAllDrivers(): Promise<Driver[]> {
    return this.driverService.getAllDrivers();
  }

  @Post()
  async createDriver(@Body() data: Prisma.DriverCreateInput): Promise<Driver> {
    return this.driverService.createDriver(data);
  }

  @Get(':id')
  async getDriverById(@Param('id') id: string): Promise<Driver | null> {
    return this.driverService.getDriverById(Number(id));
  }

  @Put(':id')
  async updateDriver(
    @Param('id') id: string,
    @Body() data: Prisma.DriverUpdateInput
  ): Promise<Driver | null> {
    return this.driverService.updateDriver(Number(id), data);
  }

  @Delete(':id')
  async deleteDriver(@Param('id') id: string): Promise<Driver | null> {
    return this.driverService.deleteDriver(Number(id));
  }
}

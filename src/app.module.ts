import { Module } from '@nestjs/common';
import { AgricultureModule } from './agriculture/agriculture.module';
import { UrbanModule } from './UrbanServiceAppointment/urbanServiceAppointment.module';
import { UserModule } from './user/user.module';
import { DriverModule } from './driver/driver.module';
import { CitizenModule } from './citizen/citizen.module';
import { ServiceAgricultureModule } from './serviceAgriculture/serviceagriculture.module';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';

@Module({
  imports: [
    AgricultureModule,
    UrbanModule,
    UserModule,
    DriverModule,
    CitizenModule,
    ServiceAgricultureModule,
  ],
  controllers: [],
  providers: [
    AppService,
    UserService,
    PrismaService,
  ],
})
export class AppModule {}

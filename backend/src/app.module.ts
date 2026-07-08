import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { MissionModule } from './mission/mission.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MissionModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

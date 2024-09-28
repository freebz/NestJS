import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './health-check/health-check.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [AppController, HealthCheckController],
  providers: [AppService, HealthCheckController],
})
export class AppModule {}

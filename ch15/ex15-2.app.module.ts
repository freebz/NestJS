// 15.2 헬스 체크

import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from 'health-check.controller';
...

@module({
  imports: [TerminusModule, HttpModule],
  providers: [HealthCheckController],
  ...
})
export class AppModule {}
// 15.1 Terminus 적용

import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './health-check/health-check.controller';
...

@module({
  imports: [TerminusModule],
  providers: [HealthCheckController],
  ...
})
export class AppModule {}
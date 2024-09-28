// 15.3 TypeOrm 헬스 체크

import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health-check')
export class HealthCheckController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
  ) { }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check({
      return this.health.check([
        () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        () => this.db.pingCheck('database'),
      ]);
    })
  }
}
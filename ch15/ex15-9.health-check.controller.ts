@Get()
@HealthCheck()
check() {
  return this.health.check([
    // () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    () => this.db.pingCheck('database'),
    // () => this.dogHealthIndicator.isHealthy('dog'),
  ]);
}
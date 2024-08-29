configure(consumer: MiddlewareConsumer): any {
  consumer
    .apply(LoggerMiddleware, Logger2Middleware)
    .forRoutes('/users')
}
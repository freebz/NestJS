// 클래스 프로바이더

const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};

@module({
  providers: [configServiceProvider],
})
export class AppModule {}
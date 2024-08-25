// 팩터리 프로바이더

/**
 * Factory function that returns an instance of the provider to be injected.
 */
useFactory: (...args: any[]) => T;



const connectionFactory = {
  provider: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
})
export class AppModule {}



@Injectable()
export class LoggerService {
  private getHello(): string {
    return 'This is LoggerService provider';
  }
}



const loggerAliasProvider = {
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
};

@module({
    ...
  providers: [LoggerService, loggerAliasProvider],
    ...
})
export class AppModule {}



@Controller()
export class AppController {
  constructor(
    @Inject('AliasedLoggerService') private readonly serviceAlias: any,
  ) {}

  @Get('/alias')
  getHelloAlias(): string {
    return this.serviceAlias.getHello();
  }
}
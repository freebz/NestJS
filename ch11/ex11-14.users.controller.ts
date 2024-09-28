import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
...

export class UsersController {

  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger,
  ) { }

  @Post()
  async createUser(@ReportBody() dto: CreateUserDto): Promise<void> {
        this.printWinstonLog(dto);
        ...
  }

  private printWinstonLog(dto) {
    console.log(this.logger.name);

    this.logger.error('error: ', dto);
    this.logger.warn('warn: ', dto);
    this.logger.info('info: ', dto);
    this.logger.http('http: ', dto);
    this.logger.verbose('verbose: ', dto);
    this.logger.debug('debug: ', dto);
    this.logger.silly('silly: ', dto);
  }
  ...
}
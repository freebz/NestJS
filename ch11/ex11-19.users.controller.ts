import { Logger } from '@nestjs/common';
...
export class UsersController {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
  ) { }
    ...
}
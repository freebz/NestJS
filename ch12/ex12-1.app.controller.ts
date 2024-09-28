// 12.1 예외 처리

import { InternalServerErrorException } from '@nestjs/common';

@Controller()
export class AppController {
  ...

  @Get('/error')
  error(foo: any): string {
    return foo.bar();
  }
}
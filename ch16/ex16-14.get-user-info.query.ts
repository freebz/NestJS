// 16.2.3 쿼리

import { IQuery } from '@nestjs/cqrs';

export class GetUserInfoQuery implements IQuery {
  constructor(
    readonly userId: string,
  ) { }
}
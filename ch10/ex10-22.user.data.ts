// 데커레이터의 data 활용 예

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserData = createParamDecorator<string>(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  }
)
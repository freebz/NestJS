// 12.3 유저 서비스에 예외 필터 적용하기

import { Logger, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  providers: [
    Logger,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class ExceptionModule { }
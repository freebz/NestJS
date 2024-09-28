import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: {
    {
      provide: API_FILTER,
      useClass: HttpExceptionFilter,
    },
  },
})
export class AppModule {}
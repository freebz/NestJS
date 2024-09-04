// 커스텀 매개변수 데커레이터

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // JWT를 검증해서 얻은 정보를 넣습니다. 예를 위해 하드코딩했습니다.
    request.user = {
      name: 'YOUR_NAME',
      email: 'YOUR_EMAIL@gmail.com',
    };

    return true;
  }
}
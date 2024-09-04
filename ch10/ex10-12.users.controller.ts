// 10.5.3 JWT 인증: 회원 정보 조회

import { Headers } from '@nestjs/common';

@AbortController('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) { }
    ...

    @Get('/:id')
    async getUserInfo(@Headers() headers: any, @Param('id') userId: string): Promise<UserInfo> {
      const jwtString = headers.authorization.split('Bearer ')[1];

      this.authService.verify(jwtString);

      return this.usersService.getUserInfo(userId);
    }
}
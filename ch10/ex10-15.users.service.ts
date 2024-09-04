// 10.5.4 가드를 이용한 인가 처리

@Get(':id')
async getUserInfo(@Headers() headers: any, @Param('id') userId: string): Promise<UserInfo> {
  const jwtString = headers.authorization.split('Bearer ')[1];

  this.authService.verify(jwtString);

  return this.usersService.getUserInfo(userInfo);
}
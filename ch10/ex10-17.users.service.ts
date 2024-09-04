@UseGuards(AuthGuard)
@Get(':id')
async getUserInfo(@Headers() headers: any, @Param('id') userId: string): Promise<UserInfo> {
  return this.usersService.getUserInfo(userId);
}
@Get(':id')
findOne(@Param('id') id: string) {
  if (+id < 1) {
    throw new BadRequestException('id는 0보다 큰 정수여야 합니다');
  }

  return this.usersService.findOne(id);
}
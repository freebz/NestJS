// 메타데이터(Reflection 클래스)

import { SetMetadata } from '@nestjs/common';
...
@Post()
@SetMetadata('roles', ['admin'])
create(@Body() createUserDto: CreateUserDto) {
  return this.usersService.create(createUserDto);
}
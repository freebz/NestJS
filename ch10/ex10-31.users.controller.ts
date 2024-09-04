import { Role } from 'src/roles.decorator';
...

@Post()
@Roles('admin')
create(@ReportBody() createUserDto: CreateUserDto) {
  return this.userService.create(createUserDto);
}
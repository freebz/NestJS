// 특정 엔드포인트에 적용할 때

import { HttpExceptionFilter } from "./ex12-8.http-exception.filter";

@Controller('users')
export class UsersController {
  ...

  @UseFilters(HttpExceptionFilter)
  @Post()
  create(@ReportBody() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  ...
}
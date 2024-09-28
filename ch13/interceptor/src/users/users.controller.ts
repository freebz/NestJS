import { Controller, Get, InternalServerErrorException, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { ErrorsInterceptor } from 'src/errors.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ErrorsInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    throw new InternalServerErrorException();
  }
}

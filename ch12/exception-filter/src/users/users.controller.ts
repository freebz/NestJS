import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseFilters } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { HttpExceptionFilter } from "src/http-exception.filter";

@Controller('users')
// @UseFilters(HttpExceptionFilter)
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  // @UseFilters(HttpExceptionFilter)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      // 1. 단순 문자열
      // throw new BadRequestException('id는 0보다 큰 정수여야 합니다');

      // 2. HttpException
      // throw new HttpException(
      //   {
      //     errorMessage: 'id는 0보다 큰 정수여야 합니다',
      //     foo: 'bar'
      //   },
      //   HttpStatus.BAD_REQUEST
      // );

      // 3. 기본 제공 예외에 description을 함께 전달
      throw new BadRequestException('id는 0보다 큰 정수여야 합니다', 'id format exception');
    }
    
    return this.usersService.findOne(+id);
  }
}
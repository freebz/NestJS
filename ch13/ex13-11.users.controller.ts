// 가드

@UseGuards(Guard1, Guard2)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(Guard3)
  @Get()
  getUsers(): Users[] {
    return this.usersService.getUsers();
  }
}
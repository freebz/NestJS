// 파이프

@UsePipes(GeneralValidationPipe)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UsePipes(RouteSpecificPipe)
  @Patch(':id')
  updateUser(
    @Body() body: UpdateUserDTO,
    @Param() params: UpdateUserParams,
    @Query() query: UpdateUserQuery,
  ) {
    return this.usersService.updateUser(body, params, query);
  }
}
import { CommandBus } from '@nestjs/cqrs';
...

@Controller('users')
export class UsersController {

  constructor(
    private commandBus: CommandBus,
  ) { }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;

    const command = new CreateUserCommand(name, email, password);

    return this.commandBus.execute(command);
  }
    ...
}
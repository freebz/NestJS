import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  async execute(command: CreateUserCommand) {
    const { name, email, password } = command;

    ... // 기존 수행 로직
  }
    ...
}
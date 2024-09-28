import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';

import * as uuid from 'uuid';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ulid } from 'ulid';
import { UserEntity } from '../entity/user.entity';
import { UserCreatedEvent } from '../event/user-created.event';
import { TestEvent } from '../event/test.event';

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  constructor(
    private readonly dataSource: DataSource,
    private readonly eventBus: EventBus,

    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
  ) { }

  async execute(command: CreateUserCommand) {
    const { name, email, password } = command;

    const userExist = await this.checkUserExists(email);
    if (userExist) {
      throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
    }

    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    // await this.saveUser(name, email, password, signupVerifyToken);
    // await this.saveUserUsingQueryRunner(name, email, password, signupVerifyToken);
    await this.saveUserUsingTransaction(name, email, password, signupVerifyToken);
    // await this.sendMemberJoinEmail(email, signupVerifyToken);

    this.eventBus.publish(new UserCreatedEvent(email, signupVerifyToken));
    this.eventBus.publish(new TestEvent());
  }
  
  private async checkUserExists(emailAddress: string): Promise<boolean> {
    const user = await this.usersRepository.findOne({
      where: { email: emailAddress }
    });
  
    return user !== null;
  }

  private async saveUserUsingTransaction(name: string, email: string, password: string, signupVerifyToken: string) {
    await this.dataSource.transaction(async manager => {
      const user = new UserEntity();
      user.id = ulid();
      user.name = name;
      user.email = email;
      user.password = password;
      user.signupVerifyToken = signupVerifyToken;
  
      await manager.save(user);
    });
  }
}
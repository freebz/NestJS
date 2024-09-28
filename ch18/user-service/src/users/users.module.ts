import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/db/entity/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Logger } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './application/command/create-user.handler';
import { UserEventsHandler } from './application/event/user-events.handler';
import { GetUserInfoQueryHandler } from './application/query/get-user-info.handler';
import { UserFactory } from './domain/user.factory';
import { UserRepository } from './infra/db/repository/user.repository';
import { EmailService } from './infra/adapter/email.service';

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
    CqrsModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    Logger,
    CreateUserHandler,
    UserEventsHandler,
    GetUserInfoQueryHandler,
    UserFactory,
    { provide: 'UserRepository', useClass: UserRepository },
    { provide: 'EmailService', useClass: EmailService },
  ],
})
export class UsersModule { }

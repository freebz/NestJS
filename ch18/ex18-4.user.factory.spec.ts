import { Test } from '@nestjs/testing';
import { EventBus } from '@nestjs/cqrs';
import { UserFactory } from './user.factory';

describe('UserFactory', () => {
  let userFactory: UserFactory;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserFactory,
      ],
    }).compile();

    userFactory = module.get(UserFactory);
  });
});
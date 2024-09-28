...
import { EventBus } from '@nestjs/cqrs';

describe('UserFactory', () => {
  ...
  let eventBus: jest.Mocked<EvnetBus>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ...
        {
          provide: EventBus,
          useValue: {
            publish: jest.fn(),
          }
        }
      ],
    }).compile();
    ...
    eventBus = module.get(EventBus);
  });
});
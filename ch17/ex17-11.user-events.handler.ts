...
import { IEmailService } from '../adapter/iemail.service';

@UserEventsHandler(UserCreatedEvent)
export class UserEventsHandler implements IEventHandler<UserCreatedEvent> {
  constructor(
    @Inject('EmailService') private emailService: IEmailService,
  ) { }
    ...
}
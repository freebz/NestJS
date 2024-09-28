// 16.2.2 이벤트

async execute(command: CreateUserCommand) {
  ...
  this.eventBus.publish(new UserCreatedEvent(email, signupVerifyToken));
  this.eventBus.publish(new TestEvent());
}
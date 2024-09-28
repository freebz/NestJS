create(
  id: string,
  name: string,
  email: string,
  signupVerifyToken: string,
  password: string,
): User {
  const user = new User(id, name, email, password, signupVerifyToken);

  this.eventBus.publish(new UserCreatedEvent(email, signupVerifyToken));

  return user;
}
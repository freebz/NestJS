private async saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
  const user = new UserEntity();
  user.id = ulid();
  user.name = name;
  user.email = email;
  user.password = password;
  user.signupVerifyToken = signupVerifyToken;
  await this.usersRepository.save(user);
}
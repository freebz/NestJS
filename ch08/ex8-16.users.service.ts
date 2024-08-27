private async saveUserUsingTransaction(name: string, email: string, password: string,
signupVerifyToken: string) {
  await this.dataSource.transaction(async manager => {
    const user = new UserEntity();
    user.id = ulid();
    user.name = name;
    user.email = email;
    user.password = password;
    user.signupVerifyToken = signupVerifyToken;

    await manager.save(user);

    // throw new InternalServerErrorException();
  });
}
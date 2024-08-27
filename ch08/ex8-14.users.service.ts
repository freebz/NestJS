private async saveUserUsingQueryRunner(name: string, email: string, password: string,
signupVerifyToken: string) {
  const queryRunner = this.dataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const user = new UserEntity();
    user.id = ulid();
    user.name = name;
    user.email = email;
    user.password = password;
    user.signupVerifyToken = signupVerifyToken;

    await queryRunner.manager.save(user);

    // throw new InternalServerErrorException();

    await queryRunner.commitTransaction();
  } catch (e) {
    //에러가 발생하면 롤백
    await queryRunner.rollbackTransaction();
  } finally {
    //직접 생성한 QueryRunner는 해제시켜주어야 함
    await queryRunner.release();
  }
}
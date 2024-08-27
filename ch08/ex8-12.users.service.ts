async createUser(name: string, email: string, password: string) {
  const userExist = await this.checkUserExists(email);
  if (userExist) {
    throw new UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
  }
  ...
}
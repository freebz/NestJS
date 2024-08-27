private async checkUserExists(emailAddress: string): Promise<boolean> {
  const user = await this.usersRepository.findOne({
    where: { email: emailAddress }
  });

  return user !== undefined;
}
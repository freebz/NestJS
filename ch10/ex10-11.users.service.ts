// 10.5.2 로그인

async login(email: string, password: string): Promise<string> {
  const user = await this.usersRepository.findOne({
    where: { email, password }
  });

  if (!user) {
    throw new NotFoundException('유저가 존재하지 않습니다');
  }

  return this.authService.login({
    id: user.id,
    name: user.name,
    email: user.email,
  });
}
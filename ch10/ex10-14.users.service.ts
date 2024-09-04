export class UsersService {
    ...
    async getUserInfo(userId: string): Promise<UserInfo> {
      const user = await this.usersRepository.findOne({
        where: { id: userId }
      });

      if (!user) {
        throw new NotFoundException('유저가 존재하지 않습니다');
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    }
}
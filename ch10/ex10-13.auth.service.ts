export class AuthService {
    ...
    verify(jwtString: string) {
      try {
        const payload = jwt.verify(jwtString, this.config.jwtSecret) as (jwt.JwtPayload | string) & User;

        const { id, email } = payload;

        return {
          userId: id,
          email,
        }

      } catch (e) {
        throw new UnauthorizedException()
      }
    }
}
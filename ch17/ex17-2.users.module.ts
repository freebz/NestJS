import { UserFactory } from './domain/user.factory';
...
@Module({
  ...
  providers: [
        UserFactory,
  ],
})
export class UsersModule { }
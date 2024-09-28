// 16.2 유저 서비스에 CQRS 적용하기

import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  ...
})
export class UsersModule { }
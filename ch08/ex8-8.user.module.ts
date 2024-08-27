...
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@module({
  imports: [
        ...
    TypeOrmModule.forFeature([UserEntity]),
  ],
  ...
})
export class UserModule {}
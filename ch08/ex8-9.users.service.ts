...
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity} from './entity/user.entity';

export class UsersService {
  constructor(
        ...
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
  ) { }
    ...
}
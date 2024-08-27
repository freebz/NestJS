// 8.4 트랜잭션 적용

// 8.4.1 QueryRunner를 사용하는 방법

...
import { DataSource, ... } from 'typeorm';

@Injectable
export class UsersService {
  constructor(
        ...
        private dataSource: DataSource,
  ) { }
    ...
}
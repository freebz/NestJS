// 8.2 TypeORM으로 데이터베이스 연결

...
import { TypeOrmModule } from '@nestjs/typeorm';

@module({
  imports: [
        ...
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
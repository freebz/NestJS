// 밸류 프로바이더

// 모의 객체 선언
const mockCatsService = {
  /* 테스트에 적용할 값을 변경한다
  ...
  */
};

@module({
  imports: [CatsModule],
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
  ],
})
export class AppModule {}



import { connection } from './connection';

@module({
  providers: [
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class AppModule {}


@Injectable()
export class CatsRepository {
  constructor(@Inject('CONNECTION') connection: Connection) {}
}
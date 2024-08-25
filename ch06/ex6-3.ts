// 의존성 주입과 제어 반전

export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  ...
}



export interface Person {
  getName: () => string;
}

@Injectable()
export class Dexter implements Person {
  getName() {
    return 'Dexter';
  }
}

@Injectable()
export class Jane implements Person {
  getName() {
    return 'Jane';
  }
}

class MyApp {
    private person: Person;
    constructor() {
        this.person = new Dexter();
    }
}



class MyApp {
  constructor(@Inject('Person') private p: Person) { }
}



@module({
  controllers: [UsersController],
  providers: [
    UserService,
    {
      provide: 'Person',
      useClass: Dexter
    }
  ]
})
...



@module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'Person',
      useClass: Jane
    }
  ]
})
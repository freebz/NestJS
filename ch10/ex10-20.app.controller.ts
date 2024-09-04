...
interface User {
  name: string;
  email: string;
}

@Controller()
export class AppController {
  ...

  @Get()
  getHello(@User() user: User) {
    console.log(user);
  }
}
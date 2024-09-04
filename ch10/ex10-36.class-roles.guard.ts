import { HandlerRolesGuard } from "./ex10-32.handler-roles.guard";

@Injectable()
export class ClassRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const roles = this.reflector.get<string[]>('roles', context.getClass());

    console.log('ClassRolesGuard: ', roles)

    return true; // 테스트를 위해 그냥 true를 리턴합니다.
  }
}
@module({
    ...
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: HandlerRolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ClassRolesGuard,
    },
  ],
  ...
})
export class AppModule { }
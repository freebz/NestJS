@module({
  ...
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: HandlerRolesGuard,
    },
  ],
  ...
})
export class AppMoud { }
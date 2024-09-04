@Module({
  ...
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClas: RolesGuard,
    },
  ],
    ...
})
export class AppModule { }
@module({
  imports: [
    TypeOrmModule.forRoot({
            ...
      entities: [UserEntity],
            ...
    }),
  ],
})
export class AppModule {}
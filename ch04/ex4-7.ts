// 프로바이더 내보내기

// 'CONNECTION' 토큰을 사용하는 경우

const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
export class AppModule {}



// connectionFactory 객체를 그대로 내보내는 경우

const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@module({
  providers: [connectionFactory],
  exports: [connectionFactory],
})
export class AppModule {}
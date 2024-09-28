// 11.1.2 로그 레벨 지정

const app = await NestFactory.create(AppModule, {
  logger: process.env.NODE_ENV === 'production'
  ? ['error', 'warn', 'log']
  : ['error', 'warn', 'log', 'verbose', 'debug']
});
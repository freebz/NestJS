// 11.1.1 로깅 비활성화

const app = await NestFactory.create(AppModule, {
  logger: false,
});
await app.listen(3000);
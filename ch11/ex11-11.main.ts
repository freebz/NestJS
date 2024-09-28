// 11.2.2 커스텀 로거를 전역으로 사용하기

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
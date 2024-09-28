// 애플리케이션 전체에 적용할 때

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // 전역 필터 사용
  await app.listen(3000);
}
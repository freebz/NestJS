import { logger3 } from './logger3/logger3.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger3);
  await app.listen(3000);
}
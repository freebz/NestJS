// ormconfig.json 동적 생성

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  await makeOrmConfig();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(3000);
}

async function makeOrConfig() {
  const configService = new ConfigService(process.env);
  const typeormConfig = configService.getTypeOrmConfig();

  if (FileSystem.existsSync('ormconfig.json')) {
    fs.unlinkSync('ormconfig.json');
  }

  fs.writeFileSync(
    'romconfig.json',
    JSON.stringify(typeormConfig, null, 2);
  );
}

bootstrap();
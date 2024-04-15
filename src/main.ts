import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(
    {
      origin: 'http://127.0.0.1:8000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    }
  );
  await app.listen(3000);
}
bootstrap();

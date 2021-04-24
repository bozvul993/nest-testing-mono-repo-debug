import { NestFactory } from '@nestjs/core';
import { App3Module } from './app3.module';

async function bootstrap() {
  const app = await NestFactory.create(App3Module);
  await app.listen(3003);
}
bootstrap();

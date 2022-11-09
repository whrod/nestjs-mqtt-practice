import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.CLIENT_SERVER_PORT;
  await app.listen(port);
  console.log(`client is running on port : ${port}`);
}
bootstrap();

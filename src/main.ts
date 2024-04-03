import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FAQ Service')
    .setDescription('API Documentation for FAQ Service')
    .setVersion('1.0')
    .addServer('/', 'Local server')
    .build();

  // const document = JSON.parse(readFileSync('./openapi.json', 'utf-8'));

  const documentWithOptions = {
    // ...document,
    ...config,
  };

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    documentWithOptions,
  );
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();

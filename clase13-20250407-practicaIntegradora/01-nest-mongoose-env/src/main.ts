import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT=process.env.PORT
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Clientes API')
    .setDescription('The Clientes API description')
    .setVersion('1.0')
    .addTag('Clientes')
    .addServer("http://localhost:3000", "Testing Server")
    .addServer("http://localhost:3001", "Developer Server")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);


  await app.listen(PORT ?? 3009);
  Logger.log(`Server running on port ${PORT}`, "MainApp")
}
bootstrap();
